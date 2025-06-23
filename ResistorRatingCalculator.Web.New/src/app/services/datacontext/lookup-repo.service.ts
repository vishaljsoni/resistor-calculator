import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ElectronicColorRing } from '../../entities/electronicColorRing';

@Injectable({
  providedIn: 'root'
})
export class LookupRepoService {
  private _restApiBase = 'http://localhost:5265/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {
  }

  public getLookupData () {
    return this._http.get<ElectronicColorRing[]>(this._restApiBase + '/Lookup', { headers: this.headers })
      .pipe(map(data => data));
  }
}
