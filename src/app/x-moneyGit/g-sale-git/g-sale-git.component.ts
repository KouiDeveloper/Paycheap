import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { enable, destroy } from 'splash-screen';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-g-sale-git',
  templateUrl: './g-sale-git.component.html',
  styleUrls: ['./g-sale-git.component.css', '../Center css/g-style-main.css']
})
export class GSaleGitComponent implements OnInit {
  private loading = false;

  @ViewChild('Alert_sendToSaleGit')
  Alert_sendToSaleGit: ElementRef;
  @ViewChild('Alert_MyQRCode')
  Alert_MyQRCode: ElementRef;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {}

  sendToSaleGit(Alert_sendToSaleGit) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_sendToSaleGit, { centered: true });
    }, 3000);
  }

  MyQRCode(Alert_MyQRCode) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_MyQRCode, { centered: true });
    }, 2000);
  }
}
