import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../../services/customer.service';
import {ActivatedRoute } from '@angular/router';
import{FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  vaildMessage : string = "";

  public custReg;
  updateForm : FormGroup;
   ids : string;
  constructor(private customerService: CustomerService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getCustomersView(this.route.snapshot.params.id),
    this.updateForm = new FormGroup({
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required)
    });
  }


  getCustomersView(id:string){
    localStorage.setItem("id",id);
    this.customerService.getCustomer(id).subscribe(
     data => {this.custReg = data},
       err => console.error(err),
     () => console.log('customer loaded'),
      
    );
  }

  
  updateRegistration(){  
    this.ids=localStorage.getItem("id");
    this.vaildMessage = "your customer Updation has been submitted. Thank you!";
      this.customerService.updateCustomer(this.ids,this.updateForm.value).subscribe(
        data => {
          return true;
        },
        error =>{
          return Observable.throw(error);
        }
      )
    } 
  

}
