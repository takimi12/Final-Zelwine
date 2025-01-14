import axios from 'axios';
import { authorizedClient } from './api';

export const getDataSeries = async () => {
  try {
    const response = await authorizedClient.get('/wc/v3/products/categories', {
      params: {
        per_page: 100,
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API error: ${error.message}`);
    }
    throw error;
  }
};