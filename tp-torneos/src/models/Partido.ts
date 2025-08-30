import { v7 as uuidv7 } from "uuid";
import type { IIdentificable } from "../interfaces/IIdentificable.js";
import type { Equipo } from "./Equipo.js";
import type { Deporte } from "./Deporte.js";
import { Resultado } from "./Resultado.js";

export class Partido implements IIdentificable {
  public readonly id: string = uuidv7();
  public local: Equipo;
  public visitante: Equipo;
  public deporte: Deporte;
  public resultado?: Resultado;

  constructor(local: Equipo, visitante: Equipo, deporte: Deporte) {
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  public jugar(): Resultado | undefined {

    if (this.local.nombre === this.visitante.nombre) {
      console.error("No se puede jugar un partido con el mismo equipo");
      return;
    }

    const localValido = this.deporte.validar(this.local);
    const visitanteValido = this.deporte.validar(this.visitante);

    if (!localValido || !visitanteValido) {
      console.error("Alguno de los equipos no cumplen con el deporte");
      return;
    }

    let golesLocal: number;
    let golesVisitante: number;

    const nombreDeporte = this.deporte.nombre.toLowerCase();

    if (nombreDeporte === "futbol") {
      golesLocal = Math.floor(Math.random() * (6 - 0 + 1) + 0);
      golesVisitante = Math.floor(Math.random() * (6 - 0 + 1) + 0);
    } else if (nombreDeporte === "basquet") {
      golesLocal = Math.floor(Math.random() * (100 - 60 + 1) + 1);
      golesVisitante = Math.floor(Math.random() * (100 - 60 + 1) + 1);
    } else {
      console.error('El deporte no es válido');
      return;
    }

    this.resultado = new Resultado(golesLocal, golesVisitante);
    return this.resultado;
  }

  public toString(): void {
    if (this.resultado) {
      console.log(`Partido en disputa - Deporte: ${this.deporte.nombre}`);
      console.log(`Equipo local: ${this.local.nombre} vs Equipo visitante ${this.visitante.nombre}`);
      this.resultado.toString();
    } else {
      console.log("Aún no se ha jugado el partido");
    }
  }
}