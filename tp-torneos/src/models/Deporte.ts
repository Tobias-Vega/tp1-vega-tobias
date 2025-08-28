import type { Equipo } from "./Equipo.js";

export abstract class Deporte {
  public nombre: string;
  public maxPorEquipo: number;

  constructor(nombre: string, maxPorEquipo:  number) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }

  abstract validar(equipo: Equipo): boolean;
}