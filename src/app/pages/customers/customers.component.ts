import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers$: Observable<any>;

  constructor(
    private http: HttpClient,
    public auth: AuthService
  ) { }

  ngOnInit() {
    // Even with the API URL in environment variables,
    // we can track down this endpoint in a minified bundle
    // with just a little bit of detective work!
    this.customers$ = this.http.get(`${environment.api}customers`);

    // This is completely transparent in a minified bundle.
    // We just need to search for "http.get" and there it is!
  }

  getCardLogo(type: string) {
    return `/assets/images/${type}.svg`;
  }

}
