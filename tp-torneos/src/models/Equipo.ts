import type { ICompetidor } from "../interfaces/ICompetidor.js";
import type { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  public nombre: string;
  private listaintegrantes: string[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  agregarJugador(jugador: Jugador): void {
    this.listaintegrantes.push(jugador.nombre);
  }

  listarIntegrantes(): string[] {
    return this.listaintegrantes;
  }

  mostrarDatos(): void {
    console.log(`Datos del equipo. Nombre: ${this.nombre}. Integrantes: ${this.listaintegrantes.join(", ")}`);
  }

  getCantidad(): number {
    return this.listaintegrantes.length;
  }
}