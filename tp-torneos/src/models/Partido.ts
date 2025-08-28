import { v7 as uuidv7 } from "uuid";
import type { IIdentificable } from "../interfaces/IIdentificable.js";
import type { Deporte } from "./Deporte.js";
import type { Equipo } from "./Equipo.js";

export class Partido implements IIdentificable {
  public id: string = uuidv7();
  public local: Equipo;
  public visitante: Equipo;
  public deporte: Deporte;
  resultado?: string;

  constructor(local: Equipo, visitante: Equipo, deporte: Deporte) {
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  private validarCondicion(): boolean {
    if (this.local === this.visitante) {
      return false;
    }
    return true;
  }

  public jugar() {
    if (!this.validarCondicion()) {
      console.log("Un equipo no puede ejercer de local y visitante a la vez");
    }
  }
}