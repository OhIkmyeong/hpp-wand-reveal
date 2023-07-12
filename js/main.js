import { Gall } from "./Gall.js";
import { Wand } from "./Wand.js";

const WAND = new Wand();
const GALL = new Gall();

window.addEventListener('mousemove',e=>{
    WAND.move_wand(e);
    GALL.toggle_reveal(e);
});

window.addEventListener('resize', ()=>{
    WAND.get_width();
});