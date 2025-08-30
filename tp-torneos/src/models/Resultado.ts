export class Resultado {
  public golesLocal: number;
  public golesVisitanes: number;

  constructor(golesLocal: number,golesVisistante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitanes = golesVisistante;
  }

  toString(): void {
    console.log(`Resultado del partido: Equipo local ${this.golesLocal} - ${this.golesVisitanes} Equipo visitante`);
  }
}