import { lakers, mavericks, nets, warriors } from "./data/equipos-basquet.js";
import { argentina, brasil, españa, francia } from "./data/equipos-futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Deporte } from "./models/Deporte.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Partido } from "./models/Partido.js";
import { Torneo } from "./models/Torneo.js";

const cuposValidos: number = 4;
const equiposFutbol: Equipo[] = [argentina, brasil, españa, francia];
const equiposBasquet: Equipo[] = [lakers, mavericks, nets, warriors];

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

const jugarTorneoFutbol = (): void => {

  if (equiposFutbol.length !== cuposValidos) {
    console.error(`La cantidad de equipos debe ser exactamente ${cuposValidos} para jugar el torneo de fútbol`);
    return;
  }
  const torneoFutbol: Torneo = new Torneo("Mundial de Fútbol");

  const partidoFutbol1: Partido = new Partido(argentina, brasil, futbol);
  const partidoFutbol2: Partido = new Partido(españa, francia, futbol);

  try {
    torneoFutbol.programarPartido(partidoFutbol1);
    torneoFutbol.programarPartido(partidoFutbol2);

    torneoFutbol.jugarTorneo();
    partidoFutbol1.toString();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

jugarTorneoFutbol();

const jugarTorneoBasquet = (): void => {
  if (equiposBasquet.length !== cuposValidos) {
    console.error(`La cantidad de equipos debe ser exactamente ${cuposValidos} para jugar el torneo de basquet`);
    return;
  }

  const torneoBasquet: Torneo = new Torneo("NBA");

  const partidoBasquet1: Partido = new Partido(lakers, warriors, basquet);
  const partidoBasquet2: Partido = new Partido(nets, mavericks, basquet);

  try {
    torneoBasquet.programarPartido(partidoBasquet1);
    torneoBasquet.programarPartido(partidoBasquet2);

    torneoBasquet.jugarTorneo();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

jugarTorneoBasquet();

// Probando errores y validaciones

// Partido con el mismo equipo
console.log("\nERROR 1: Partido con el mismo equipo");
const partido1: Partido = new Partido(argentina, argentina, futbol);
partido1.jugar();

// Torneo con cantidad incorrecta de partidos
console.log(`\nERROR 2: torneo con menos de 2 partidos`);
const torneo: Torneo = new Torneo("Torneo");
const partido2: Partido = new Partido(argentina,francia, futbol);
torneo.programarPartido(partido2);
torneo.jugarTorneo();

// Buscar partido inexistente
console.log(`\nERROR 3: buscar partido con id inexistente`);
torneo.buscarPartido('fdsfsdfsd');

// jugar partido con equipos de distintos deportes
console.log(`\nERROR 4: jugar un partido con equipos de diferentes deportes y validar cantidad de jugadores`);
//* Nota: también esta validando que la cantidad de jugadores debe ser igual para el deporte
const partido3: Partido = new Partido(argentina, lakers, futbol);
partido3.jugar();