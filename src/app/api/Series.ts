import axios from 'axios';
import { apiAuthorized } from './api';

export const getDataSeries = async () => {
  try {
    const username = process.env.NEXT_PUBLIC_API_USERNAME;
    const password = process.env.NEXT_PUBLIC_API_PASSWORD;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!username || !password || !baseUrl) {
      throw new Error(
        'Missing environment variables for API credentials or base URL',
      );
    }

    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials);

    const response = await apiAuthorized.get(
      `${baseUrl}/wc/v3/products/categories`,
      {
        params: {
          per_page: 100,
        },
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API error: ${error.message}`);
    }
    throw error;
  }
};
