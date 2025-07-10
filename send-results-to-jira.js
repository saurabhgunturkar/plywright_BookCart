const axios = require('axios');

const jiraUrl = "https://saurabhgunturkar07.atlassian.net/";
const jiraUser = "saurabhgunturkar07@gmail.com";
const jiraApiToken = process.env.JIRA_TOKEN ;// Use GitHub Secrets for security
const issueKey = process.env.ISSUE_KEY || "L1-3"; // Pass this as an environment variable

async function sendResultsToJira() {
  if (!issueKey) {
    console.error('ISSUE_KEY is not provided.');
    process.exit(1);
  }

  const auth = Buffer.from(`${jiraUser}:${jiraApiToken}`).toString('base64');

  const comment = {
    body: 'Test results have been updated from GitHub Actions.',
  };

  await axios.post(
    `${jiraUrl}/rest/api/3/issue/${issueKey}/comment`,
    comment,
    {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(`Test results sent to JIRA issue ${issueKey}`);
}

sendResultsToJira().catch((err) => {
  console.error('Failed to send results to JIRA:', err);
  process.exit(1);
});