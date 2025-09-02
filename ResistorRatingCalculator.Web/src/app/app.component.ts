import { Component, OnInit } from '@angular/core';
import { LookupRepoService } from './services/datacontext/lookup-repo.service';
import { ElectronicColorRing, RingName } from './entities/electronicColorRing';
import { LookupService } from './services/lookup.service';
import { ResistorCalcRepoService } from './services/datacontext/resistor-calc-repo.service';
import { CalculatedOhmForResistor } from './entities/calculatedOhmForResistor';

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
  public bandARings!: ElectronicColorRing[];
  public bandBRings!: ElectronicColorRing[];
  public bandCRings!: ElectronicColorRing[];
  public bandDRings!: ElectronicColorRing[];
  public selectedBandA!: ElectronicColorRing;
  public selectedBandB?: ElectronicColorRing | null;
  public selectedBandC?: ElectronicColorRing | null;
  public selectedBandD!: ElectronicColorRing;
  public calculatedResult?: CalculatedOhmForResistor | null;
  private _allBands!: ElectronicColorRing[];
  ngOnInit (): void {
    this._lookupRepo.getLookupData().subscribe(data => {
      this._allBands = data;
      this.isLookupLoading = false;
      this.initializeView();
    });
  }

  private initializeView (): void {
    this.bandARings = this._lookupServ.getBandAOrBRings(this._allBands);
    this.bandBRings = this._lookupServ.getBandAOrBRings(this._allBands);
    this.bandCRings = this._lookupServ.getBandCRings(this._allBands);
    this.bandDRings = this._lookupServ.getBandDRings(this._allBands);
    this.selectedBandD = this.bandDRings[0];
  }

  public getBackgroundColor (selectedBand: ElectronicColorRing) {
    if (!selectedBand) {
      return 'aliceblue';
    }

    if (selectedBand.RingName === RingName.None) {
      return 'transparent';
    }
    return selectedBand.RingDisplayValue.toLowerCase();
  }

  public recalculateOhms () {
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
        this.selectedBandD.RingCode,
        bandBCode, bandCCode).subscribe(data => {
          this.calculatedResult = data;
        });
    }
  }
}
