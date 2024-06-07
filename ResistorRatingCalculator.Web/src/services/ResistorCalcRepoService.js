// Conversion of Angular service to React service
import axios from 'axios';

class ResistorCalcRepoService {
  _restApiBase = 'http://resistorratingapi20180610112012.azurewebsites.net/api';

  calculateOhmValueWithTolerance(bandACode, bandDCode, bandBCode, bandCCode) {
    return axios.get(this.getApiCallAddress(bandACode, bandDCode, bandBCode, bandCCode))
      .then(response => response.data);
  }

  getApiCallAddress(bandA, bandD, bandB, bandC) {
    return `${this._restApiBase}/OhmValueCalculator/${bandA}/${bandD}/${bandB}/${bandC}`;
  }
}

export default new ResistorCalcRepoService();
