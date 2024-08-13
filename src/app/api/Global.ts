
export const getGlobals = async () => {
    const response = await fetch(`https://grzejniki.ergotree.pl/wp-json/options/all`, {
        method: 'GET',
    });

    if(!response.ok){
            throw new Error('Something went wrong');
    }    
        
    return response.json();
}






