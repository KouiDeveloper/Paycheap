import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GProfileComponent } from './g-profile.component';

describe('GProfileComponent', () => {
  let component: GProfileComponent;
  let fixture: ComponentFixture<GProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
