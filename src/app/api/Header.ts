import {apiAuthorized} from "./api"

export const getHeaderData = async () => {
  const {data} = await apiAuthorized.get("navigation")

  return data;
};


// export const getProductsAds = async (params: string) => {
//   try {
//     const response = await axios.get(
//       `https://grzejniki.ergotree.pl/wp-json/wp/v2/product/${params}`
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error('Something went wrong');
//   }
// };