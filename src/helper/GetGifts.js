export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OpPk4s51H5PNNQ0Fqa9stR6xs711rq1K&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

   
    return gifs;
}
