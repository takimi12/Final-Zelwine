import { apiAuthorized } from './api';

export const getDataOpinionPage = async () => {
  try {
    const response = await apiAuthorized.get('/wp/v2/pages/159');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
