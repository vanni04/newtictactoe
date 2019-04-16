export class Tile{

    hasValue:boolean = true;
    id : number;
    imgSrc : string;
    clicked : boolean = false;
    xtile : boolean;
    ytile : boolean;
    hideTile : boolean;

    setValue( value ){
       this.id = value;
    }
     
    setimgSrc(imgSrc){
       this.imgSrc = imgSrc;
    }

 
   }
 