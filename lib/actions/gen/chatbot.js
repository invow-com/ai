const axios = require("axios");

const chatbot = async (prompt) => {
  const response = await axios.post(
    process.env.OPENAI_ENDPOINT,
    {
      prompt,
      max_tokens: Number(process.env.OPENAI_TOKENS_LIMIT),
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);

  return response.data.choices[0].text;
};

module.exports = chatbot;
