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




//
// const peticion = fetch('https://pokeapi.co/api/v2/pokemon/8/');
// peticion
// .then( resp => resp.json() .then( ( {sprites} )=> {
//     console.log(sprites.other.home.front_default);
//     const { url } = sprites.other.home;
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append( img );
// })
// )
// .catch( console.warn() )
// ;