import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders } from '@angular/common/http';

import {Observable} from  'rxjs/Observable';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) { }


  getCustomers(){

    return this.http.get('/server/customer/get');
  }

  getCustomer(id: number){
    return this.http.get('/server/customer/getUserById/'+id);
}

getDeleteCustomer(id: number){
  return this.http.delete('/server/delete/'+id);
}

createCustomerRegistration(customer){

  let body= JSON.stringify(customer);
  return this.http.post('/server/customer/create/', body, httpOptions);

}


}
