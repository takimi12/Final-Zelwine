export const getData = async () => {
    const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
        },
      });
      const result = await response.json();
        if(!response.ok){
            throw new Error('Something went wrong', )
        }    
    
    return  result
  }





//   try {
//     const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
//       },
//     });
//     const result = await response.json();
//     // Filter categories where parent is equal to 0 and exclude "Bez kategorii"
//     const filteredCategories = result.filter(category => category.parent === 0 && category.name !== "Bez kategorii");
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }