const apiKey = 'e9NDh0olczBjgyILGqOmmHjmnNoolbnY';
const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    return data.map(({id, images, title}) => {
        return {
            id: id,
            title: title,
            img: images?.downsized_medium.url
        };
    })

}

export default getGifs;