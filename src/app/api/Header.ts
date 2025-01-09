import axios from 'axios';
import { authorizedClient } from './api';

export const getHeaderData = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_NAVIGATION;
    const response = await authorizedClient.get(apiUrl!);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API error: ${error.message}`);
    }
    throw error;
  }
};