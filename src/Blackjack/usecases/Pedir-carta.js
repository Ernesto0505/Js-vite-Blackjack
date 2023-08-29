



// Esta función me permite tomar una carta

/**
 * Es obligatorio mandar el deck como argumento 
 * @param {Array<String>} deck 
 * @returns String
 */

export const pedirCarta = (deck) => {
    

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

