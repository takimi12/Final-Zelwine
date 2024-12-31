import { apiAuthorized } from "./api";



export const getDataHomepage = async () => {
  try {
    const response = await apiAuthorized.get('/wp/v2/pages/17');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};





