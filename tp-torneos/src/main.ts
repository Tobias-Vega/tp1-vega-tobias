import { lakers, mavericks, nets, warriors } from "./data/equipos-basquet.js";
import { argentina, brasil, españa, francia } from "./data/equipos-futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Deporte } from "./models/Deporte.js";
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

const jugarTorneoFutbol = (): void => {
  const torneoFutbol: Torneo = new Torneo("Mundial de Fútbol");

  const partidoFutbol1: Partido = new Partido(argentina, brasil, futbol);
  const partidoFutbol2: Partido = new Partido(españa, francia, futbol);

  try {
    torneoFutbol.programarPartido(partidoFutbol1);
    torneoFutbol.programarPartido(partidoFutbol2);

    torneoFutbol.jugarTorneo();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

jugarTorneoFutbol();

const jugarTorneoBasquet = (): void => {
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

// jugarTorneoBasquet();


// const forzarErroresFutbol = () => {
//     const torneoFutbol: Torneo = new Torneo("Mundial de Fútbol");

//     const partidoFutbol1: Partido = new Partido(argentina, lakers, futbol);
//     const partidoFutbol2: Partido = new Partido(españa, francia, basquet);

//     try {
//         torneoFutbol.programarPartido(partidoFutbol1);
//         torneoFutbol.programarPartido(partidoFutbol2);

//         torneoFutbol.jugarTorneo();
//     } catch (error) {
//         if (error instanceof Error) {
//             console.error(error.message);
//         }
//     }
// }