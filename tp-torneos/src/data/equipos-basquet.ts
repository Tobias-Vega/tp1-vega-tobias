import { Equipo } from "../models/Equipo.js";
import type { Jugador } from "../models/Jugador.js";
import { jugadoresBasket } from "./jugadores-basquet.js";

export const lakers: Equipo = new Equipo("Lakers");
export const warriors: Equipo = new Equipo("Warriors");
export const nets: Equipo = new Equipo("Nets");
export const mavericks: Equipo = new Equipo("Mavericks");

const jugadoresLakers: Jugador[] = jugadoresBasket.slice(0, 5);
const jugadoresWarriors: Jugador[] = jugadoresBasket.slice(5, 10);
const jugadoresNets: Jugador[] = jugadoresBasket.slice(10, 15);
const jugadoresMavericks: Jugador[] = jugadoresBasket.slice(15, 20);

jugadoresLakers.forEach((jugador) => lakers.agregarJugador(jugador));
jugadoresWarriors.forEach((jugador) => warriors.agregarJugador(jugador));
jugadoresNets.forEach((jugador) => nets.agregarJugador(jugador));
jugadoresMavericks.forEach((jugador) => mavericks.agregarJugador(jugador));