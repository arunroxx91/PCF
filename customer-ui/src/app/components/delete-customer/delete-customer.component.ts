import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../../services/customer.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public custDel;
  constructor(private customerService: CustomerService,private route:ActivatedRoute,private router: Router,  ) { }

  ngOnInit() {
    this.getCustomersDelete(this.route.snapshot.params.id)
  }

  getCustomersDelete(id:number){
    this.customerService.getDeleteCustomer(id).subscribe(
     data => this.router.navigateByUrl('/customer'),
       err => console.error(err),
     () => console.log('customer Deleted'),
     
      
    );
  }
}
