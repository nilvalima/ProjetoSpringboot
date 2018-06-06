import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/CustomerService';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customers:Customer[];

  constructor(
    private customerService:CustomerService
  ) {}
  
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  deleteCustomer(customer:Customer) {
    this.customerService.delete(customer).subscribe(data => {
      this.findAll();
    });
  }
}