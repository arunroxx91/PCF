import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../../services/customer.service';
import{FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  custForm : FormGroup;
  vaildMessage : string = "";


  constructor(private custservice:CustomerService) { }

  ngOnInit() {

    this.custForm = new FormGroup({
      id: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      address: new FormControl(),
      phoneNumber: new FormControl('',Validators.required)
    });
  }
  submitRegistration(){
    if(this.custForm.valid){
      this.vaildMessage = "your customer registraion has been submitted. Thank you!";
      this.custservice.createCustomerRegistration(this.custForm.value).subscribe(
        data => {
          this.custForm.reset();
          return true;
        },
        error =>{
          return Observable.throw(error);
        }
      )
    } else{
      this.vaildMessage = "Please fill out the form before submitting! "; 
    }
  }


}
