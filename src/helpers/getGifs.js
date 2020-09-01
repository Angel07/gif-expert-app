export const getGifs = async(category) => {
    const apiKey = 'n0fgonuCSqIWVwViU3qx8qzq8gbM1sad';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(x => {
        return {
            id: x.id,
            title: x.title,
            url: x.images?.downsized_medium.url
        }
    })
    return gifs;
}
