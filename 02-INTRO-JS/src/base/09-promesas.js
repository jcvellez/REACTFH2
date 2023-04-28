//en index pones esta 
//import { getHeroeById } from '../src/base/08-imp-exp'
import { getHeroeById } from '../base/08-imp-exp'

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 1500 )
    
    });


}

getHeroeByIdAsync(5)
.then( (heroe)=> console.log(heroe) )
.catch( (error)=> console.log(error) );