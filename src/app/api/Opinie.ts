export const getData = async () => {
    const response = await fetch('https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/159')
        if(!response.ok){
            throw new Error('Something went wrong')
        }    
    
    return  response.json()
  }