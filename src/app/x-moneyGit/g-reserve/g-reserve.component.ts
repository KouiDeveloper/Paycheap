import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { enable, destroy } from 'splash-screen';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();

@Component({
  selector: 'app-g-reserve',
  templateUrl: './g-reserve.component.html',
  styleUrls: ['./g-reserve.component.css', '../Center css/g-style-main.css']
})
export class GReserveComponent implements OnInit {
  // this for create variable
  private loading = false;
  model: NgbDateStruct;
  date: { year: number; month: number };
  arrModel = [];

  // for alert modal
  @ViewChild('Alert_sendToReserveGit')
  Alert_sendToReserveGit: ElementRef;
  @ViewChild('Alert_ScanQRCodeToReserveGit_Price')
  Alert_ScanQRCodeToReserveGit_Price: ElementRef;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {
    this.selectToday();
  }

  sendToBuyGit(Alert_sendToReserveGit) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_sendToReserveGit, { centered: true });
    }, 2000);
  }

  selectToday() {
    this.model = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  }
}
