// Chatbot backend API route

import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;

      // Get API key from environment variables
      const apiKey = process.env.GOOGLE_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: 'Google API key not configured' });
      }

      // Initialize GoogleGenerativeAI client
      const genAI = new GoogleGenerativeAI(apiKey);

      // Use the gemini-2.0-flash-lite model
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });

      // Send the user's message to the model
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();

      res.status(200).json({ answer: text });
    } catch (error) {
      console.error('Error handling chat request:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
