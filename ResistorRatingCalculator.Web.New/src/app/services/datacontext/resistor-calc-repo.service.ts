import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalculatedOhmForResistor } from '../../entities/calculatedOhmForResistor';

@Injectable({
  providedIn: 'root'
})
export class ResistorCalcRepoService {
  private _restApiBase = 'http://localhost:5265/api';
  constructor(private _http: HttpClient) { }

  /**
   * calculateResistorResistance
   */
  public calculateOhmValueWithTolerance (bandACode: string, bandDCode: string, bandBCode: string, bandCCode: string) {
    return this._http.get<CalculatedOhmForResistor>(this.getApiCallAddress(bandACode, bandDCode, bandBCode, bandCCode))
      .pipe(map(data => data));
  }

  private getApiCallAddress (bandA: string, bandD: string, bandB: string, bandC: string): string {
    return this._restApiBase + '/OhmValueCalculator/' + bandA + '/' + bandD + '/' + bandB + '/' + bandC;
  }
}
