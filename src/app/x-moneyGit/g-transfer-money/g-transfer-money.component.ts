import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { enable, destroy } from 'splash-screen';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-g-transfer-money',
  templateUrl: './g-transfer-money.component.html',
  styleUrls: [
    './g-transfer-money.component.css',
    '../Center css/g-style-main.css'
  ]
})
export class GTransferMoneyComponent implements OnInit {
  private loading = false;

  @ViewChild('Alert_sendToTransferGit')
  Alert_sendToTransferGit: ElementRef;
  @ViewChild('Alert_ScanQRCodeToTransferGit_Price')
  Alert_ScanQRCodeToTransferGit_Price: ElementRef;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {}

  sendToSaleGit(Alert_sendToTransferGit) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_sendToTransferGit, { centered: true });
    }, 3000);
  }

  ScanQRCodeToSaleGit(
    Alert_ScanQRCodeToTransferGit_Price,
    Alert_sendToTransferGit
  ) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_ScanQRCodeToTransferGit_Price, {
        centered: true
      });
    }, 1000);
  }
}
