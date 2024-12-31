import { apiAuthorized } from "./api";

export const getGlobalsDataOption = async () => {
  try {
    const response = await apiAuthorized.get('/options/all');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

