import { api } from './api';

export const getDataBusinessPage = async () => {
  try {
    const response = await api.get('/wp/v2/pages/178');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
