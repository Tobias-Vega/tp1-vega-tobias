import { Equipo } from "../models/Equipo.js";
import type { Jugador } from "../models/Jugador.js";
import { jugadoresFutbol } from "./jugadores-futbol.ts.js";

export const argentina: Equipo = new Equipo("Argentina");
export const brasil: Equipo = new Equipo("Brasil");
export const francia: Equipo = new Equipo("Francia");
export const españa: Equipo = new Equipo("España");

const jugadoresArgentina: Jugador[] = jugadoresFutbol.slice(0, 11);
const jugadoresBrasil: Jugador[] = jugadoresFutbol.slice(11, 22);
const jugadoresFrancia: Jugador[] = jugadoresFutbol.slice(22, 33);
const jugadoresEspaña: Jugador[] = jugadoresFutbol.slice(33, 44);

jugadoresArgentina.forEach((jugador) => argentina.agregarJugador(jugador));
jugadoresBrasil.forEach((jugador) => brasil.agregarJugador(jugador));
jugadoresFrancia.forEach((jugador) => francia.agregarJugador(jugador));
jugadoresEspaña.forEach((jugador) => españa.agregarJugador(jugador));