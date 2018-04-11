import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  private baseURL = 'http://localhost:4200/assets/data/java/';

  getJavaData(title) {
    return this.http
      .get(this.baseURL + title + '.json')
      .map(response => response.json());
  }

  getIndexData() {
    return this.http
      .get(this.baseURL + 'index.json')
      .map(Response => Response.json())
  }
}
