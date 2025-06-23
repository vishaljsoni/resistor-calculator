import { Injectable } from '@angular/core';
import { ElectronicColorRing } from '../entities/electronicColorRing';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() { }

  public getBandAOrBRings (allBands: ElectronicColorRing[]): ElectronicColorRing[] {
    return allBands.filter(ecr => ecr.SignificantFigure !== null);
  }

  public getBandCRings (allBands: ElectronicColorRing[]): ElectronicColorRing[] {
    return allBands.filter(ecr => ecr.Multiplier !== null);
  }

  public getBandDRings (allBands: ElectronicColorRing[]): ElectronicColorRing[] {
    return allBands.filter(ecr => ecr.TolerancePercent !== null);
  }
}
