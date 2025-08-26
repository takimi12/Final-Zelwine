import { api } from './api';

export const getGlobalsDataOption = async () => {
  try {
    const response = await api.get('/options/all');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
