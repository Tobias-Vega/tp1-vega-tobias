import { Deporte } from "./Deporte.js";
import type { Equipo } from "./Equipo.js";

export class Futbol extends Deporte {

  constructor() {
    super("futbol", 11);
  }

  public validar(equipo: Equipo): boolean {
    if (this.maxPorEquipo !== equipo.getCantidad()) {
      console.error(`La cantidad de jugadores debe ser exactamente ${this.maxPorEquipo}}`);
      return false;
    }

    return true;
  }
}