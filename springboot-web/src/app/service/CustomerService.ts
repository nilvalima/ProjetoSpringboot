import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '../model/Customer';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) {}
  
  private customerUrl = 'http://localhost:8080/api';

  public getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  public create(customer:Customer) : Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, httpOptions);
  }

  public delete(customer:Customer) {
    return this.http.delete(this.customerUrl + "/" + customer.id);
  }

  public findById(id:number) : Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl + "/" + id);
  }
}