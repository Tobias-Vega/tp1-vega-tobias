import { Deporte } from "./Deporte.js";
import type { Equipo } from "./Equipo.js";

export class Basquet extends Deporte {
  nombre: string = "Basquet";
  maxPorEquipo: number = 5;

  validar(equipo: Equipo): boolean {
    if (this.maxPorEquipo < equipo.getCantidad()) {
      console.log("La cantidad de jugadores excede al permitido");
      return false;
    }

    return true;
  }
}