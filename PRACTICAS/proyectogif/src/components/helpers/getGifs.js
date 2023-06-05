
export const getGifs = async ( category ) => {
    //category = 'kiss'
    const uri = `https://api.otakugifs.xyz/gif?reaction=${category}`;
    const respuesta = await fetch(uri);
    //const data = await respuesta.json();
    const { url } = await respuesta.json();

    let gifs = [{
        id: 1,
        title: 'category ' + category,
        url: url
    }];

    return gifs;

    // console.log(gifs);
    // setImages(gifs);
}