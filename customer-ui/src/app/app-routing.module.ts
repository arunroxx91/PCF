import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import{CusViewComponent} from './components/cus-view/cus-view.component';

const routes: Routes = [

  {
    path:'customer',
    component:CusViewComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  