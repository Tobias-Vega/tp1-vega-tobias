import { v7 as uuidv7 } from "uuid";
import type { IIdentificable } from "../interfaces/IIdentificable.js";

export class Jugador implements IIdentificable {
  public id: string = uuidv7();
  public nombre: string;
  public edad: number;
  public posicion?: string | undefined;

  constructor(
    nombre: string,
    edad: number,
    posicion: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }

  toString(): void {
    console.log(`Datos del jugador. Nombre: ${this.nombre}. Edad ${this.edad}. Posición: ${this.posicion ? this.posicion : "No proporcionado"}`);
  }
}