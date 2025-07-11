const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json()); // Important to parse JSON body

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = 'saurabhgunturkar/plywright_BookCart';

app.post('/trigger', async (req, res) => {
  const issueKey = req.body.issue?.key;

  if (!issueKey) {
    return res.status(400).send('Missing issue key in payload');
  }

  const payload = {
    event_type: 'jira_trigger',
    client_payload: {
      issue_key: issueKey
    }
  };

  try {
    await axios.post(
      `https://api.github.com/repos/${GITHUB_REPO}/dispatches`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );

    res.send(`✅ Triggered GitHub Actions for issue ${issueKey}`);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send('❌ Failed to trigger GitHub Actions');
  }
});

app.listen(3000, () => {
  console.log('Middleware server running on port 3000');
});
