export interface ElectronicColorRing {
  RingName: string;
  RingDisplayValue: string;
  RingCode: string;
  SignificantFigure?: number;
  Multiplier?: number;
  TolerancePercent?: number;
}

export interface CalculatedOhmForResistor {
  MinimumOhm: number;
  MaximumOhm: number;
  ActualOhm: number;
}
