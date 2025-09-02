
export class ElectronicColorRing {
    RingName!: RingName;
    RingDisplayValue!: string;
    RingCode!: string;
    SignificantFigure?: number | null;
    Multiplier?: number | null;
    TolerancePercent?: number | null;
}

export enum RingName {
    None = -4,
    Pink = -3,
    Silver = -2,
    Gold = -1,
    Black = 0,
    Brown = 1,
    Red = 2,
    Orange = 3,
    Yellow = 4,
    Green = 5,
    Blue = 6,
    Violet = 7,
    Gray = 8,
    White = 9
}
