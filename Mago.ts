import { Personaje } from "./Personaje"

export class Mago extends  Personaje {
    protected armaAtaque: string = "Varita Majique"


    constructor(nombre:string) {
        super(nombre) 
    }

    public atacar():void {
        this.ataque= this.ataque -1
        console.log(`${this.nombre} lanza un ataque simple con su varita magica  ${this.ataque}`)
 
    }
}