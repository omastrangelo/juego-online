import { Personaje } from "./Personaje";

export class Evolucion extends Personaje{
    protected vida = 200;
    protected ataque = 20;

    constructor(nombre:string) {
        super(nombre)
    }

    public atacar():void {
        this.ataque= this.ataque -1
        console.log(`${this.nombre} ataca con su espada`)
 
    }

    public evolucionar(){
        this.vida = this.vida
        this.ataque=this.ataque
    }


}