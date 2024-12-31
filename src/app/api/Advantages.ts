import { apiAuthorized } from './api';

export const getProductsAds = async (params: string) => {
  try {
    const response = await apiAuthorized.get(`/wp/v2/product/${params}`);
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
