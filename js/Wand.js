export class Wand{
    constructor(){
        this.$wand = document.getElementById('wand');
        this.get_width();
    }//constructor

    get_width(){
        this.winWid = window.innerWidth;
        this.winHei = window.innerHeight;
        this.winWidHalf = window.innerWidth / 2;
        this.width = this.$wand.getBoundingClientRect().width;
    }//get_width

    move_wand = (e)=>{
        const {clientX,clientY} = e;
        // this.$wand.style.transform = `translate(${clientX - (this.width / 2)}px, ${clientY}px)`;
        const per = clientX / this.winWid;
        const deg = (per * 20) - 10; //-10 ~ 10이라 20 곱하고 -10 뺀거임
        // const wandX = (this.winWid * -0.15) + clientX * 1.3;
        const wandX =(this.winWid * -0.15) + clientX * 1.3;
        console.log(wandX);
        const wandY = (this.winHei * 0.1) + clientY * 0.4;
        this.$wand.animate([
            {transform : `translate(${wandX}px, ${wandY}px) rotate(${deg}deg)`}
        ],{
            duration : 500,
            fill : "forwards" 
        });
    }//move_wand
}//class-Wand