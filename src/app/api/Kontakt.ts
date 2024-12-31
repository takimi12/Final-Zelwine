import { apiAuthorized } from './api';

export const getDataContactPage = async () => {
  try {
    const response = await apiAuthorized.get('/wp/v2/pages/190');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
