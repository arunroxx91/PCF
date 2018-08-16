import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import{CusViewComponent} from './components/cus-view/cus-view.component';
import{ViewRegistrationComponent} from './components/view-registration/view-registration.component';
import{DeleteCustomerComponent} from './components/delete-customer/delete-customer.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'customer/view/:id',
    component:ViewRegistrationComponent
  },
  {
    path:'customer/delete/:id',
    component:DeleteCustomerComponent
  },
  {
    path:'customer',
    component:CusViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  