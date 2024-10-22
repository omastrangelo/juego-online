import { Guerrero } from "./Guerrero";
import { Mago } from "./Mago";
import { Elfo } from "./Elfo";
import { Evolucion } from "./MagoEvo";

let aquiles:Guerrero = new Guerrero("Aquiles");
let merlin:Mago = new Mago("Merlin");
let legolas:Elfo = new Elfo("Legolas");
let harry:Evolucion = new Evolucion("Harry");

legolas.atacar()
legolas.getAtaque()

merlin.atacar()
merlin.getAtaque()


aquiles.getVida()
aquiles.recibeSuperAtaque()
aquiles.restituyeVida()

aquiles.atacar()
aquiles.getAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.muerte()
merlin.getVida


harry.getVida()
harry.getAtaque()
