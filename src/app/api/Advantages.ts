export const getProductsAds = async (params: string) => {
  const response = await fetch(
    `https://grzejniki.ergotree.pl/wp-json/wp/v2/product/${params}`,
    {
      method: 'GET',
    },
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};
