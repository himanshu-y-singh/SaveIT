
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI(
    { apiKey: process.env.GOOGLE_API_KEY }
  )],
  // Updated to a valid and current model.
  // Ensure GOOGLE_API_KEY is set in your environment variables.
  model: 'googleai/gemini-2.5-flash-lite',

});
