const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(express.json());

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['\n'],
  });

  res.json({ response: response.data.choices[0].text.trim() });
});

app.listen(3001, () => console.log('Server running on port 3001'));
