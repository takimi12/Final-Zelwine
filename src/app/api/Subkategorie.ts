import axios from 'axios';
import { authorizedClient } from './api';

export const getDataSubcategories = async () => {
  try {
    const response = await authorizedClient.get('/wc/v3/products', {
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