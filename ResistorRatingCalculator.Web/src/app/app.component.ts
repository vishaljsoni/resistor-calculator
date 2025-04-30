import { Component, OnInit } from '@angular/core';
import { LookupRepoService } from './services/datacontext/lookup-repo.service';
import { ElectronicColorRing } from './entities/electronicColorRing';
import { LookupService } from './services/lookup.service';
import { ResistorCalcRepoService } from './services/datacontext/resistor-calc-repo.service';
import { CalculatedOhmForResistor } from './entities/calculatedOhmForResistor';
import { catchError, of } from 'rxjs';

// Define RingName enum to match the values used in the app
enum RingName {
  None = -4,
  Pink = 0,
  Silver = 1,
  Gold = 2,
  Black = 3,
  Brown = 4,
  Red = 5,
  Orange = 6,
  Yellow = 7,
  Green = 8,
  Blue = 9,
  Violet = 10,
  Gray = 11,
  White = 12
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _lookupRepo: LookupRepoService,
    private _lookupServ: LookupService,
    private _resistorCalcRepo: ResistorCalcRepoService
  ) { }

  public isLookupLoading = true;
  public bandARings: ElectronicColorRing[] = [];
  public bandBRings: ElectronicColorRing[] = [];
  public bandCRings: ElectronicColorRing[] = [];
  public bandDRings: ElectronicColorRing[] = [];
  public selectedBandA: ElectronicColorRing | null = null;
  public selectedBandB: ElectronicColorRing | null = null;
  public selectedBandC: ElectronicColorRing | null = null;
  public selectedBandD: ElectronicColorRing | null = null;
  public calculatedResult: CalculatedOhmForResistor | null = null;
  private _allBands: ElectronicColorRing[] = [];
  
  ngOnInit(): void {
    // Set a timeout to ensure UI is shown even if API call takes too long
    setTimeout(() => {
      this.isLookupLoading = false;
    }, 3000);
    
    this._lookupRepo.getLookupData()
      .pipe(
        catchError(err => {
          console.error('Error loading lookup data:', err);
          this.isLookupLoading = false;
          return of([]);
        })
      )
      .subscribe(data => {
        this._allBands = data;
        this.isLookupLoading = false;
        this.initializeView();
      });
  }

  private initializeView(): void {
    if (this._allBands.length === 0) {
      console.warn('No bands data available. UI might not function properly.');
      return;
    }
    
    this.bandARings = this._lookupServ.getBandAOrBRings(this._allBands);
    this.bandBRings = this._lookupServ.getBandAOrBRings(this._allBands);
    this.bandCRings = this._lookupServ.getBandCRings(this._allBands);
    this.bandDRings = this._lookupServ.getBandDRings(this._allBands);
    
    if (this.bandDRings.length > 0) {
      this.selectedBandD = this.bandDRings[0];
    }
  }

  public getBackgroundColor(selectedBand: ElectronicColorRing | null): string {
    if (!selectedBand) {
      return 'aliceblue';
    }

    if (selectedBand.RingName === RingName.None) {
      return 'transparent';
    }
    return selectedBand.RingDisplayValue.toLowerCase();
  }

  public recalculateOhms(): void {
    this.calculatedResult = null;
    if (this.selectedBandA) {
      let bandBCode = '';
      let bandCCode = '';
      if (!this.selectedBandB && this.selectedBandC) {
        this.selectedBandC = null;
      }
      if (this.selectedBandB) {
        bandBCode = this.selectedBandB.RingCode;
      }
      if (this.selectedBandC) {
        bandCCode = this.selectedBandC.RingCode;
      }

      this._resistorCalcRepo.calculateOhmValueWithTolerance(
        this.selectedBandA.RingCode,
        this.selectedBandD?.RingCode || '',
        bandBCode, bandCCode)
        .pipe(
          catchError(err => {
            console.error('Error calculating ohms:', err);
            return of(null);
          })
        )
        .subscribe(data => {
          if (data) {
            this.calculatedResult = data;
          }
        });
    }
  }
}
