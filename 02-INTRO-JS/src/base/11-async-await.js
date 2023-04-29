//async 

const getImagen = async () => {
    const id=52;
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const sprites = await peticion.json();
    return sprites;
}
getImagen().then(
    ({ sprites }) => {
        console.log(sprites.other.home.front_default)
        const url = sprites.other.home.front_default;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    }

);
