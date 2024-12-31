import axios from 'axios';
import { New_Tegomin } from 'next/font/google';

export const getHeaderData = async () => {
  const username = process.env.NEXT_PUBLIC_API_USERNAME;
  const password = process.env.NEXT_PUBLIC_API_PASSWORD;

  const apiUrl = process.env.NEXT_PUBLIC_API_NAVIGATION;

  try {
    const response = await axios.get(apiUrl!, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(`${username}:${password}`),
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API error: ${error.message}`);
    }
    throw error;
  }
};
