import {baseURL} from '../constans';

interface IApi {
  baseURL: string;
  getData(endpoint: string, auth: boolean, params: any): Promise<any>;
}

class Api implements IApi {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  async getData(endpoint: string, auth: boolean, params: any) {
    if (auth) {
      // logic for auth
    } else {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  }
}

const api = new Api(baseURL);

export default api;
