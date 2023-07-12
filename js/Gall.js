export class Gall{
    constructor(){
        this.$gall = document.getElementById('gall');
        this.$$item = this.$gall.querySelectorAll('.gall-item');

        this.init();
    }//constructor
    
    init(){
        /* 각자 부채처럼 회전시키기 */
    }//init

    toggle_reveal(e){
        const {clientX,clientY} = e;
        const wandX = (window.innerWidth * -0.5) + clientX * 2.0;

        this.$$item.forEach($item=>{
            const $img = $item.querySelector('.gall-item-photo');
            
            const {left,width} = $item.getBoundingClientRect();
            const relX = wandX - left;
            const relXDec = relX / width;

            const opacity = relXDec; 
            const blur = (1 - relXDec) * 10;

            $item.style.setProperty('--opacity',opacity);
            $item.style.setProperty('--blur',`${blur * 10}px`);
        });
    }//toggle_reveal
}//class-Gall