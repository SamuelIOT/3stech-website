// Method 1: Using environment variable (recommended)
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Method 2: Using dotenv package
// require('dotenv').config();
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// Method 3: Direct assignment (less secure)
// const openai = new OpenAI({
//   apiKey: 'your-api-key-here',
// });