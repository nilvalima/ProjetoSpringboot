import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/CustomerService';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public customer: Customer = new Customer();
  
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      let id = params['id'];

      if(id) {
        this.customerService.findById(id).subscribe(customer => {
          this.customer = customer;
        });
      }
    });
  }

  create() {
    console.log(this.customer);
    this.customerService.create(this.customer).subscribe(data => {
      this.router.navigate(['/customers']);
    });
  }
}