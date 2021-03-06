import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { enable, destroy } from 'splash-screen';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-g-voucher',
  templateUrl: './g-voucher.component.html',
  styleUrls: ['./g-voucher.component.css']
})
export class GVoucherComponent implements OnInit {
  private loading = false;

  @ViewChild('Alert_finish_generate_qr')
  Alert_finish_generate_qr: ElementRef;
  @ViewChild('Alert_MyQRCode')
  Alert_MyQRCode: ElementRef;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {}

  GenerateQRCode(Alert_finish_generate_qr) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_finish_generate_qr, { centered: true });
    }, 2000);
  }

  MyQRCode(Alert_MyQRCode) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_MyQRCode, { centered: true });
    }, 1000);
  }
}
