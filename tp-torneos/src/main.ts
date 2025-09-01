import { lakers, mavericks, nets, warriors } from "./data/equipos-basquet.js";
import { argentina, brasil, españa, francia } from "./data/equipos-futbol.js";
import { Basquet } from "./models/Basquet.js";
import type { Deporte } from "./models/Deporte.js";
import { Futbol } from "./models/Futbol.js";
import { Partido } from "./models/Partido.js";
import { Torneo } from "./models/Torneo.js";

argentina.toString();
brasil.toString();
españa.toString();
francia.toString();

lakers.toString();
warriors.toString();
nets.toString();
mavericks.toString();

const futbol: Deporte = new Futbol();
const basquet: Deporte = new Basquet();

const torneoFutbol: Torneo = new Torneo("Mundial de Fútbol");

const partidoFutbol1: Partido = new Partido(argentina, brasil, basquet);
const partidoFutbol2: Partido = new Partido(españa, francia, futbol);

torneoFutbol.programarPartido(partidoFutbol1);
torneoFutbol.programarPartido(partidoFutbol2);

torneoFutbol.jugarTorneo();

const torneoBasquet: Torneo = new Torneo("NBA");

const partidoBasquet1 = new Partido(lakers, warriors, basquet);
const partidoBasquet2 =  new Partido(nets, mavericks, basquet);

torneoBasquet.programarPartido(partidoBasquet1);
torneoBasquet.programarPartido(partidoBasquet2);

torneoBasquet.jugarTorneo();