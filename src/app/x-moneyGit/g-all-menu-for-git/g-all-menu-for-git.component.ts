import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g-all-menu-for-git',
  templateUrl: './g-all-menu-for-git.component.html',
  styleUrls: [
    './g-all-menu-for-git.component.css',
    '../Center css/g-style-main.css'
  ]
})
export class GAllMenuForGitComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  gTest() {
    this.router.navigate(['/g-test']);
  }

  gTranSacTion() {
    this.router.navigate(['/g-transaction']);
  }
  gBuyGit() {
    this.router.navigate(['/g-buy-git']);
  }

  gSaleGit() {
    this.router.navigate(['/g-sale-git']);
  }
  gTransferMoney() {
    this.router.navigate(['/g-transfer-money']);
  }
  gReserve() {
    this.router.navigate(['/g-reserve']);
  }
  gProfile() {
    this.router.navigate(['/g-profile']);
  }
  gVoucher() {
    this.router.navigate(['/g-voucher']);
  }
  gAddmin() {
    this.router.navigate(['/g-admin']);
  }
}
