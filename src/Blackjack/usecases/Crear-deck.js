import _, { defaults } from 'underscore'




/**
 * Esta funcion cre un nuevo deck
 * @param {Array<string>} tiposDeCartas Ejepmlos : 
 * @param {Array<string>} tiposEspeciales Ejemplos:
 * @returns {array}
 */


// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCartas,tiposEspeciales) => {

    if ( !tiposDeCartas || tiposDeCartas.length === 0  ) 
    throw new Error ("tiposDecartas es obliatorio como un arreglo de String")
    if ( !tiposEspeciales || tiposEspeciales.length === 0  ) 
    throw new Error ("tiposEspeciales es obliatorio como un arreglo de String")


    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}


