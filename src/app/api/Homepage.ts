import { api } from './api';

export const getDataHomepage = async () => {
  try {
    const response = await api.get('/wp/v2/pages/17');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
