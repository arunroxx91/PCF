import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-cus-view',
  templateUrl: './cus-view.component.html',
  styleUrls: ['./cus-view.component.css']
})
export class CusViewComponent implements OnInit {

  public customer;//return from backEnd

  constructor(private custservice:CustomerService) { }

  ngOnInit() {
    this.getBikes();
  }
// retrive from backEnd store in below meathod

getBikes(){
 this.custservice.getBikes().subscribe(
  data => {this.customer = data},
  err => console.error(err),
  () => console.log('customer loaded')
 );

}
}
