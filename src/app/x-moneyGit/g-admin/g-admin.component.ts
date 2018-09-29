import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g-admin',
  templateUrl: './g-admin.component.html',
  styleUrls: ['./g-admin.component.css']
})
export class GAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  gAdminOnline() {
    this.router.navigate(['/g-admin-online']);
  }
  gAdminOffline() {
    this.router.navigate(['/g-admin-offline']);
  }
}
