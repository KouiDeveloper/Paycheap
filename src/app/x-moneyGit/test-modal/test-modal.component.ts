import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();
@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };
  arrModel = [];

  selectTime() {
    this.arrModel.length = 0;
  }
  constructor() {}

  ngOnInit() {
    this.selectToday();
  }

  selectToday() {
    this.model = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  }
}
