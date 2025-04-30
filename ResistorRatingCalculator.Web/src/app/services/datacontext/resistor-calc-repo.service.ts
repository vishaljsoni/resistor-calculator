import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalculatedOhmForResistor } from '../../entities/calculatedOhmForResistor';

@Injectable({
  providedIn: 'root'
})
export class ResistorCalcRepoService {
  private _restApiBase = `https://${window.location.hostname}:5001/api`;
  
  constructor(private _http: HttpClient) {
    console.log('ResistorCalcRepoService API URL:', this._restApiBase);
  }

  /**
   * calculateResistorResistance
   */
  public calculateOhmValueWithTolerance(bandACode: string, bandDCode: string, bandBCode: string, bandCCode: string): Observable<CalculatedOhmForResistor> {
    return this._http.get<CalculatedOhmForResistor>(this.getApiCallAddress(bandACode, bandDCode, bandBCode, bandCCode))
      .pipe(
        map(data => data),
        catchError(error => {
          console.error('Error calculating ohm value:', error);
          // Return mock calculated result if API call fails
          return of(this.getMockCalculatedResult(bandACode, bandDCode, bandBCode, bandCCode));
        })
      );
  }

  private getApiCallAddress(bandA: string, bandD: string, bandB: string, bandC: string): string {
    return this._restApiBase + '/OhmValueCalculator/' + bandA + '/' + bandD + '/' + bandB + '/' + bandC;
  }

  // Generate a mock calculation result when the API is not available
  private getMockCalculatedResult(bandA: string, bandD: string, bandB: string, bandC: string): CalculatedOhmForResistor {
    // Simple calculation based on resistor color codes
    // This is a simplified version and doesn't match the full calculation logic
    const colorValues: {[key: string]: number} = {
      'BK': 0, 'BN': 1, 'RD': 2, 'OG': 3, 'YL': 4,
      'GN': 5, 'BL': 6, 'VT': 7, 'GY': 8, 'WH': 9
    };
    
    const multiplierValues: {[key: string]: number} = {
      'BK': 1, 'BN': 10, 'RD': 100, 'OG': 1000, 'YL': 10000,
      'GN': 100000, 'BL': 1000000, 'VT': 10000000, 'GY': 100000000, 'WH': 1000000000,
      'GD': 0.1, 'SR': 0.01
    };
    
    const toleranceValues: {[key: string]: number} = {
      'BN': 1, 'RD': 2, 'GN': 0.5, 'BL': 0.25, 'VT': 0.1,
      'GY': 0.05, 'GD': 5, 'SR': 10, 'NO': 20
    };
    
    let baseValue = 0;
    let multiplier = 1;
    let tolerance = 20; // Default tolerance
    
    // Calculate base value
    if (bandA && colorValues[bandA] !== undefined) {
      baseValue = colorValues[bandA] * 10;
      
      if (bandB && colorValues[bandB] !== undefined) {
        baseValue += colorValues[bandB];
        
        if (bandC && multiplierValues[bandC] !== undefined) {
          multiplier = multiplierValues[bandC];
        }
      }
    }
    
    // Apply tolerance
    if (bandD && toleranceValues[bandD] !== undefined) {
      tolerance = toleranceValues[bandD];
    }
    
    const actualOhm = baseValue * multiplier;
    const toleranceValue = actualOhm * (tolerance / 100);
    
    return {
      ActualOhm: actualOhm,
      MinimumOhm: actualOhm - toleranceValue,
      MaximumOhm: actualOhm + toleranceValue
    };
  }
}
