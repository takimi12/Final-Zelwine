import axios from 'axios';
import { authorizedClient } from './api';

export const getAllProducts = async (params: string) => {
  try {
    const response = await authorizedClient.get(
      `/wc/v2/products/${params}`,
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API error: ${error.message}`);
    }
    throw error;
  }
};
