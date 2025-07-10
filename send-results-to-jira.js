const axios = require('axios');

const jiraUrl = "https://saurabhgunturkar07.atlassian.net";
const jiraUser = "saurabhgunturkar07@gmail.com";
const jiraApiToken = process.env.JIRA_TOKEN;
const issueKey = process.env.ISSUE_KEY;

console.log(`ISSUE KEY = ${issueKey}`);

async function sendResultsToJira() {
  if (!issueKey) {
    console.error('❌ ISSUE_KEY is not provided.');
    process.exit(1);
  }

  const auth = Buffer.from(`${jiraUser}:${jiraApiToken}`).toString('base64');
  const requestUrl = `${jiraUrl}/rest/api/2/issue/${issueKey}/comment`;

  const comment = {
    body: 'Test results have been updated from GitHub Actions.',
  };

  try {
    console.log("Request URL:", requestUrl);
    console.log("Auth Header:", `Basic ${auth}`);

    await axios.post(
      requestUrl,
      comment,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(`✅ Test results sent to JIRA issue ${issueKey}`);
  } catch (err) {
    console.error('❌ Failed to send results to JIRA:', err.response?.data || err.message);
    process.exit(1);
  }
}

sendResultsToJira();
