import { Deporte } from "./Deporte.js";
import type { Equipo } from "./Equipo.js";

export class Futbol extends Deporte {

  nombre: string = "Fútbol";
  maxPorEquipo: number = 11;

  validar(equipo: Equipo): boolean {
    if (this.maxPorEquipo < equipo.getCantidad()) {
      console.log("La cantidad de jugadores excede al permitido");
      return false;
    }

    return true;
  }
}