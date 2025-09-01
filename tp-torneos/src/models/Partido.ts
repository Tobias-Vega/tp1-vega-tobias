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
      console.error("No se puede jugar un partido con el mismo equipo\n");
      return;
    }

    const localValido = this.deporte.validar(this.local);
    const visitanteValido = this.deporte.validar(this.visitante);

    if (!localValido || !visitanteValido) {
      console.error("Alguno de los equipos no cumplen con el deporte\n");
      return;
    }

    let golesLocal: number;
    let golesVisitante: number;
    let penalesLocal: number = 0;
    let penalesVisitante: number = 0;

    const nombreDeporte = this.deporte.nombre.toLowerCase();

    if (nombreDeporte === "futbol") {
      const golesTiempoLocal = Math.floor(Math.random() * 5);
      const golesTiempoVisitante = Math.floor(Math.random() * 5);

      console.log(`Resultado en tiempo reglamentario: ${this.local.nombre} ${golesTiempoLocal} - ${golesTiempoVisitante} ${this.visitante.nombre}`);

      golesLocal = golesTiempoLocal;
      golesVisitante = golesTiempoVisitante;

      if (golesLocal === golesVisitante) {
        console.log("El partido ha terminado en empate. Se define por penales");

        const tanda: number = 5;
        penalesLocal = 0;
        penalesVisitante = 0;

        for (let i = 0; i < tanda; i++) {
          if (Math.random() >= 0.5) penalesLocal++;
          if (Math.random() >= 0.5) penalesVisitante++;

          const penalesRestantes = tanda - (i + 1);

          if (penalesLocal > penalesVisitante + penalesRestantes) break;
          if (penalesVisitante > penalesLocal + penalesRestantes) break;
        }

        let ronda = 1;
        while (penalesLocal === penalesVisitante) {
          console.log(`Empate en penales. Muerte súbita, ronda ${ronda}`);
          if (Math.random() >= 0.5) penalesLocal++;
          if (Math.random() >= 0.5) penalesVisitante++;
          ronda++;
        }

        console.log(`Resultado en penales: ${penalesLocal} - ${penalesVisitante}`);

        golesLocal = penalesLocal;
        golesVisitante = penalesVisitante;

        console.log(`Resultado final del partido: ${this.local.nombre} ${golesLocal} - ${golesVisitante} ${this.visitante.nombre}`);
      } else {
        console.log(`Resultado final del partido: ${this.local.nombre} ${golesLocal} - ${golesVisitante} ${this.visitante.nombre}`);
      }
    } else if (nombreDeporte === "basquet") {
      golesLocal = Math.floor(Math.random() * (100 - 60 + 1) + 60);
      golesVisitante = Math.floor(Math.random() * (100 - 60 + 1) + 60);
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
      console.log(`Equipo local: ${this.local.nombre} vs Equipo visitante: ${this.visitante.nombre}\n`);
      this.resultado.toString();
    } else {
      console.log("Aún no se ha jugado el partido\n");
    }
  }
}