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

  const comment = {
    body: 'Test results have been updated from GitHub Actions.',
  };

  await axios.post(
    `${jiraUrl}/rest/api/2/issue/${issueKey}/comment`,
    comment,
    {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(`✅ Test results sent to JIRA issue ${issueKey}`);
}

sendResultsToJira().catch((err) => {
      console.log("Request URL:", `${jiraUrl}/rest/api/2/issue/${issueKey}/comment`);
    console.log("Auth Header:", `Basic ${auth}`);
  console.error('❌ Failed to send results to JIRA:', err.response?.data || err.message);
  process.exit(1);
});
