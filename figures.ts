


abstract class Figure {
    protected nombreDeCotes: number;
    protected taille: number;
    protected perimetre: number;
    protected aire: number;

    constructor( ){
        this.taille=0;
        this.nombreDeCotes=0;
        this.aire=0;
        this.perimetre= this.nombreDeCotes * this.taille;
    }



    

    rapport(){
        let description = "cette figure a " + this.nombreDeCotes + " côtés, la taille d'un côté est: " + this.taille + ", son périmètre est " + this.perimetre + " et son aire est (environ) " + this.aire;
        return description;
    }

}

class Triangle extends Figure{
    constructor(taille: number){
    super();
    this.taille=taille;
    this.nombreDeCotes = 3;
    this.aire=Math.sqrt(3)/2*taille * taille;
    this.perimetre= this.nombreDeCotes * this.taille;
    }

    rapport(){
        return super.rapport() +", c'est un triangle";

}
}

class Losange extends Figure{
    estUnCarre: boolean;
    diagonale1: number;
    diagonale2: number;
    constructor( diagonale1: number, diagonale2: number){
        super();
        this.diagonale1=diagonale1;
        this.diagonale2=diagonale2;
        this.nombreDeCotes = 4;
        this.taille = 0.5*Math.sqrt(diagonale1*diagonale1+diagonale2*diagonale2);
        this.estUnCarre = diagonale1 == diagonale2 ? true : false;
        this.aire=0.5*diagonale1*diagonale2;
        this.perimetre= this.nombreDeCotes * this.taille;
    }

    rapport(){
        let complement = this.estUnCarre ? " et c'est un carré !" : ".";
        return super.rapport() + ", c'est un losange" + complement;

}
}






let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Losange(5,6); // diagonale1, diagonale2
let l2 = new Losange(4,4);
let figures:Figure[] = [t1, t2, l1, l2];
for(let f of figures){
    console.log(f.rapport());
    }