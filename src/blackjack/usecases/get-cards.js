

/**
 * Esta funcion me permite obtener una carta
 * @param {Array<String>} deck es un arreglo de string 
 * @returns  {String} retorna la carta del deck
 */
 export const pedirCarta = ( deck ) => {
    
    if ( !deck || deck.length === 0 ) {
        throw 'No quedan mas cartas en la baraja.';
    }
    return deck.pop();
}
 