import { pedirCarta } from "./Pedir-carta"
import { crear_carta_html } from "./crear-carta-html"
import { valorCarta } from "./valor-cartas"

/**
 * turno de la computadora
 * @param {number} puntosMinimos 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<string>} deck 
 */
let puntosComputadora = 0

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck = [] ) => {
   

if(!puntosMinimos) throw new Error('puntos computadoras son necesarios')
if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario ')

   

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crear_carta_html(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}