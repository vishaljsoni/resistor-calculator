import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatedOhmForResistor, ElectronicColorRing } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  readonly title = 'Resistor Calculator';
  readonly apiBase = window.location.origin.includes('4200') ? 'http://localhost:5000/api' : '/api';

  loading = true;
  error?: string;
  rings: ElectronicColorRing[] = [];

  bandAOptions: ElectronicColorRing[] = [];
  bandBOptions: ElectronicColorRing[] = [];
  bandCOptions: ElectronicColorRing[] = [];
  bandDOptions: ElectronicColorRing[] = [];

  bandA?: ElectronicColorRing;
  bandB?: ElectronicColorRing;
  bandC?: ElectronicColorRing;
  bandD?: ElectronicColorRing;

  result?: CalculatedOhmForResistor;

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.loadRings();
  }

  get bandAColor(): string {
    return this.getColor(this.bandA);
  }
  get bandBColor(): string {
    return this.getColor(this.bandB);
  }
  get bandCColor(): string {
    return this.getColor(this.bandC);
  }
  get bandDColor(): string {
    return this.getColor(this.bandD);
  }

  private loadRings(): void {
    this.loading = true;
    this.http.get<ElectronicColorRing[]>(`${this.apiBase}/Lookup`).subscribe({
      next: rings => {
        this.rings = rings;
        this.populateBands();
        this.loading = false;
      },
      error: err => {
        this.error = 'Failed to load color bands from API.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  private populateBands(): void {
    const hasSignificant = (r: ElectronicColorRing) => r.SignificantFigure !== undefined && r.SignificantFigure !== null;
    this.bandAOptions = this.rings.filter(hasSignificant);
    this.bandBOptions = this.bandAOptions;
    this.bandCOptions = this.rings.filter(r => r.Multiplier !== undefined && r.Multiplier !== null);
    this.bandDOptions = this.rings.filter(r => r.TolerancePercent !== undefined && r.TolerancePercent !== null);

    this.bandA = this.bandAOptions[0];
    this.bandD = this.bandDOptions[0];
  }

  recalculate(): void {
    this.result = undefined;
    this.error = undefined;
    if (!this.bandA || !this.bandD) {
      this.error = 'Please select required bands.';
      return;
    }

    const bandBCode = this.bandB?.RingCode ?? '';
    const bandCCode = this.bandC?.RingCode ?? '';
    this.http.get<CalculatedOhmForResistor>(`${this.apiBase}/OhmValueCalculator/${this.bandA.RingCode}/${this.bandD.RingCode}/${bandBCode}/${bandCCode}`)
      .subscribe({
        next: res => this.result = res,
        error: err => {
          this.error = 'Unable to calculate ohm value.';
          console.error(err);
        }
      });
  }

  private getColor(band?: ElectronicColorRing): string {
    if (!band) {
      return '#f4f4f4';
    }
    if (band.RingDisplayValue.toLowerCase() === 'none') {
      return 'transparent';
    }
    return band.RingDisplayValue.toLowerCase();
  }
}
