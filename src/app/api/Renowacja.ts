import { apiAuthorized } from "./api";

export const getDataRenovation = async () => {
  try {
    const response = await apiAuthorized.get('/wp/v2/pages/109');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
