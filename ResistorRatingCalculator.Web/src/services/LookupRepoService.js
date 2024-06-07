import axios from 'axios';

class LookupRepoService {
  _restApiBase = 'http://resistorratingapi20180610112012.azurewebsites.net/api';

  getLookupData() {
    return axios.get(`${this._restApiBase}/Lookup`)
      .then(response => response.data);
  }
}

export default LookupRepoService;
