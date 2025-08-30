import { Deporte } from "./Deporte.js";
import type { Equipo } from "./Equipo.js";

export class Basquet extends Deporte {

  constructor() {
    super("basquet", 5);
  }

  public validar(equipo: Equipo): boolean {
    if (this.maxPorEquipo !== equipo.getCantidad()) {
      console.log(`La cantidad de jugadores debe ser exactamente ${this.maxPorEquipo}}`);
      return false;
    }

    return true;
  }
}