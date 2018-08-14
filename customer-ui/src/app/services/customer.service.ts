import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders } from '@angular/common/http';

import {Observable} from  'rxjs/Observable';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) { }


  getBikes(){

    return this.http.get('/server/customer/get');
  }

}
