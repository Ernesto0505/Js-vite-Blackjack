
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno 
 */


export const crear_carta_html = (carta) =>{

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta 
}