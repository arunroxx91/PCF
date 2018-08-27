import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {Observable} from  'rxjs/Observable';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) { }
  apiUrl = environment.apiUrl;

  getCustomers(){
    return this.http.get(this.apiUrl+'/customer/get');
  //  return this.http.get('/server/customer/get');
  }

  getCustomer(id: string){
   //  return this.http.get('/server/customer/getUserById/'+id);
   return this.http.get(this.apiUrl+'/customer/getUserById/'+id);
}

getDeleteCustomer(id: number){
  // return this.http.delete('/server/customer/delete/'+id);
  return this.http.delete(this.apiUrl+'/customer/delete/'+id);
}

updateCustomer(id: string,customer){
  let body= JSON.stringify(customer);
  return this.http.put(this.apiUrl+'/customer/update/'+id,body,httpOptions);
 // return this.http.put('/server/customer/update/'+id,body,httpOptions);
}

createCustomerRegistration(customer){

  let body= JSON.stringify(customer);
  return this.http.post(this.apiUrl+'/customer/create/', body, httpOptions);
 // return this.http.post('/server/customer/create/', body, httpOptions);

}

}
