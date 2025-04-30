import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ElectronicColorRing } from 'src/app/entities/electronicColorRing';

@Injectable({
  providedIn: 'root'
})
export class LookupRepoService {
  private _restApiBase = `https://${window.location.hostname}:5001/api`;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {
    console.log('LookupRepoService API URL:', this._restApiBase);
  }

  public getLookupData(): Observable<ElectronicColorRing[]> {
    return this._http.get<ElectronicColorRing[]>(this._restApiBase + '/Lookup', { headers: this.headers })
      .pipe(
        map(data => data),
        catchError(error => {
          console.error('Error fetching lookup data:', error);
          // Return mock data if API call fails
          return of(this.getMockLookupData());
        })
      );
  }

  // Provide mock data if API is not available
  private getMockLookupData(): ElectronicColorRing[] {
    return [
      { RingCode: 'BK', RingName: 3, RingDisplayValue: 'Black', SignificantFigure: 0, Multiplier: 1, TolerancePercent: null },
      { RingCode: 'BN', RingName: 4, RingDisplayValue: 'Brown', SignificantFigure: 1, Multiplier: 10, TolerancePercent: 1 },
      { RingCode: 'RD', RingName: 5, RingDisplayValue: 'Red', SignificantFigure: 2, Multiplier: 100, TolerancePercent: 2 },
      { RingCode: 'OG', RingName: 6, RingDisplayValue: 'Orange', SignificantFigure: 3, Multiplier: 1000, TolerancePercent: null },
      { RingCode: 'YL', RingName: 7, RingDisplayValue: 'Yellow', SignificantFigure: 4, Multiplier: 10000, TolerancePercent: null },
      { RingCode: 'GN', RingName: 8, RingDisplayValue: 'Green', SignificantFigure: 5, Multiplier: 100000, TolerancePercent: 0.5 },
      { RingCode: 'BL', RingName: 9, RingDisplayValue: 'Blue', SignificantFigure: 6, Multiplier: 1000000, TolerancePercent: 0.25 },
      { RingCode: 'VT', RingName: 10, RingDisplayValue: 'Violet', SignificantFigure: 7, Multiplier: 10000000, TolerancePercent: 0.1 },
      { RingCode: 'GY', RingName: 11, RingDisplayValue: 'Gray', SignificantFigure: 8, Multiplier: 100000000, TolerancePercent: 0.05 },
      { RingCode: 'WH', RingName: 12, RingDisplayValue: 'White', SignificantFigure: 9, Multiplier: 1000000000, TolerancePercent: null },
      { RingCode: 'GD', RingName: 2, RingDisplayValue: 'Gold', SignificantFigure: null, Multiplier: 0.1, TolerancePercent: 5 },
      { RingCode: 'SR', RingName: 1, RingDisplayValue: 'Silver', SignificantFigure: null, Multiplier: 0.01, TolerancePercent: 10 },
      { RingCode: 'NO', RingName: -4, RingDisplayValue: 'None', SignificantFigure: null, Multiplier: null, TolerancePercent: 20 }
    ];
  }
}
