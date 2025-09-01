import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { v7 as uuidv7 } from 'uuid';
import { Partido } from "./Partido.js";
import type { Equipo } from "./Equipo.js";
import type { Resultado } from "./Resultado.js";

export class Torneo implements IIdentificable {
  public readonly id: string = uuidv7();
  public nombre: string;
  private listaPartidos: Partido[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public programarPartido(partido: Partido): void {
    this.listaPartidos.push(partido);
  }

  public listarPartidos(): Partido[] {
    return [...this.listaPartidos];
  }

  public buscarPartido(id: string): Partido | undefined {
    const partido: Partido | undefined = this.listaPartidos.find((p) => p.id === id);
    if (!partido) {
      console.error(`Partido con ID ${id} no encontrado.\n`);
    }
    return partido;
  }

  public jugarTorneo(): Equipo | undefined {
    const partidos = this.listarPartidos();

    if (partidos.length !== 2) {
      console.error("Se necesitan exactamente 2 partidos para jugar las semifinales.\n");
      return;
    }

    if (!partidos[0]?.deporte) {
      console.error("El deporte de los partidos no coincide.\n");
      return;
    }

    // Semifinales
    console.log(`Semifinales del torneo ${this.nombre}\n`);
    const ganadoresSemifinales: Equipo[] = partidos.map((partido) => {
      const resultado: Resultado | undefined = partido.jugar();
      partido.toString();

      if (!resultado) {
        throw new Error("Error al jugar el partido.\n");
      }
      return resultado.golesLocal >= resultado.golesVisitanes ? partido.local : partido.visitante;
    });

    // Final
    console.log(`Final del torneo ${this.nombre}\n`);
    const equipoA: Equipo | undefined = ganadoresSemifinales[0];
    const equipoB: Equipo | undefined = ganadoresSemifinales[1];

    if (!equipoA || !equipoB) {
      throw new Error("No se pudieron determinar los equipos finalistas.\n");
    }

    const finalPartido: Partido = new Partido(equipoA, equipoB, partidos[0].deporte);
    const resultadoFinal: Resultado | undefined = finalPartido.jugar();
    finalPartido.toString();

    if (!resultadoFinal) {
      console.error("Error al jugar el partido final.\n");
      return;
    }

    const campeon: Equipo = resultadoFinal.golesLocal >= resultadoFinal.golesVisitanes ? finalPartido.local : finalPartido.visitante;
    console.log(`El campeón del torneo ${this.nombre} es ${campeon.nombre}\n`);
    return campeon;
  }

  toString(): void {
    console.log(`Id: ${this.id} - Nombre del torneo: ${this.nombre} - Partidos: ${this.listaPartidos.length}\n`);
  }
}