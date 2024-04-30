export const getData = async () => {
    const response = await fetch("https://grzejniki.ergotree.pl/wp-json/wc/v3/products?per_page=100", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('ck_9f79ec15e7fa0c63c24b397280863cac6487c380:cs_ebf833bec357c2ff7984afcb0a6ebc76784da3a6')
      },
    });
  
          if(!response.ok){
              throw new Error('Something went wrong', )
          }    
      
      return  response.json()
    }
  
  
  
  