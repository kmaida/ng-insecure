import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Customers, CUSTOMERS } from './customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customers[] = CUSTOMERS;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  getCardLogo(type: string) {
    return `/assets/images/${type}.svg`;
  }

}
