import Highway from '@dogstudio/highway';
import Fade from './fade.js';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

//get menu links
const links = document.querySelectorAll('header a');

//listen to the NAVIGATE_IN event
H.on( 'NAVIGATE_IN', ( { to , location } ) => {
    links.forEach(link =>{
       //remove the active class
        link.classList.remove('is-active');

        //add the active class
        if(link.href === location.href){
            link.classList.add('is-activate');
        }
    });

} );

