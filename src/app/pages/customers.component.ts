import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-customers',
  template: `
  <app-auth></app-auth>
  <ng-template [ngIf]="auth.loggedIn">
    <h1 class="text-center">Customers</h1>
    <div class="container" *ngIf="customers$ | async; let customers">
      <div *ngFor="let cc of customers">
        <ul class="list-unstyled">
          <li><strong>Name:</strong> {{ cc.name }}</li>
          <li><strong>Type:</strong> {{ cc.type }}</li>
          <li><strong>Number:</strong> {{ cc.number }}</li>
          <li><strong>Expires:</strong> {{ cc.exp }}</li>
          <li><strong>CVV:</strong> {{ cc.cvv }}</li>
        </ul>
      </div>
    </div>
  </ng-template>
  `,
  styles: []
})
export class CustomersComponent implements OnInit {
  customers$: Observable<any>;

  constructor(
    private http: HttpClient,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.customers$ = this.http.get('https://fakeapi.kmaida.net/api/customers');
  }

}
