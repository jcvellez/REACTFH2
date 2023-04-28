const peticion = fetch('https://pokeapi.co/api/v2/pokemon/8/');

peticion
.then( resp => resp.json() .then( ( {sprites} )=> {
    console.log(sprites.other.home.front_default);
    const { url } = sprites.other.home;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
})
)
.catch( console.warn() )
;