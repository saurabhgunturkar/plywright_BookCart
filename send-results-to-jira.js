const axios = require('axios');
const fs = require('fs');
const path = require('path');

const jiraUrl = "https://saurabhgunturkar07.atlassian.net";
const jiraUser = "saurabhgunturkar07@gmail.com";
const jiraApiToken = process.env.JIRA_TOKEN;
const issueKey = process.env.ISSUE_KEY;
const reportPath = "playwright-report/index.html"; // Change to your actual report file

console.log(`🔍 Sending results to JIRA for issue ${issueKey}...`);
console.log(`Jira token: ${jiraApiToken ? 'Provided' : 'Not provided'}`);

async function sendResultsToJira() {
  if (!issueKey || !jiraApiToken) {
    console.error('❌ Missing ISSUE_KEY or JIRA_TOKEN.');
    process.exit(1);
  }

  const auth = Buffer.from(`${jiraUser}:${jiraApiToken}`).toString('base64');
  const requestUrl = `${jiraUrl}/rest/api/2/issue/${issueKey}/comment`;

  let reportContent = "Test results updated.";
  if (fs.existsSync(reportPath)) {
    reportContent = fs.readFileSync(reportPath, "utf8");
  }

  const comment = {
    body: `🧪 **Automated Test Report** from GitHub Actions:\n\n${reportContent}`,
  };

  try {
    const response = await axios.post(requestUrl, comment, {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`✅ Test report sent to JIRA issue ${issueKey}`);
    console.log("Response:", response.data);
  } catch (err) {
    console.error('❌ Failed to send results to JIRA:', err.response?.data || err.message);
    process.exit(1);
  }
}

sendResultsToJira();
