//import highway
import Highway from '@dogstudio/highway';

//import gsap
import Tween from 'gsap';

//fade
class Fade extends Highway.Transition {
    in({from, to, done}){
        //Remove old content
        from.remove();

        //animation
        Tween.fromTo( to, 0.5, {opacity: 0}, {opacity:1, onComplete: done})
    }
    out({from,done}){
        //animation
        Tween.fromTo( from, 0.5, {opacity: 1}, {opacity:0, onComplete: done})
    }
}

//export fade class
export default  Fade;

