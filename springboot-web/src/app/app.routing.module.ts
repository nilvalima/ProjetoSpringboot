import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const routes: Routes = [{
  path: 'customers', component: CustomerComponent,
}, {
  path: 'add', component: AddCustomerComponent
}, {
  path: 'edit/:id', component: AddCustomerComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }