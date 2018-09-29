import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { enable, destroy } from 'splash-screen';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-g-buy-git',
  templateUrl: './g-buy-git.component.html',
  styleUrls: ['./g-buy-git.component.css', '../Center css/g-style-main.css']
})
export class GBuyGitComponent implements OnInit {
  private loading = false;

  @ViewChild('Alert_sendToBuyGit')
  Alert_sendToBuyGit: ElementRef;
  @ViewChild('Alert_ScanQRCodeToBuyGit_Price')
  Alert_ScanQRCodeToBuyGit_Price: ElementRef;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {}

  sendToBuyGit(Alert_sendToBuyGit) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_sendToBuyGit, { centered: true });
    }, 3000);
  }

  ScanQRCodeToBuyGit(Alert_ScanQRCodeToBuyGit_Price, Alert_sendToBuyGit) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_ScanQRCodeToBuyGit_Price, {
        centered: true
      });
    }, 1000);
  }
}
