import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { enable, destroy } from 'splash-screen';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-g-profile',
  templateUrl: './g-profile.component.html',
  styleUrls: ['./g-profile.component.css']
})
export class GProfileComponent implements OnInit {
  private loading = false;

  @ViewChild('Alert_MyQRCode')
  Alert_MyQRCode: ElementRef;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {}

  MyQRCode(Alert_MyQRCode) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.modalService.open(Alert_MyQRCode, {
        centered: true
      });
    }, 1000);
  }
}
