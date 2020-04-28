import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdialogComponent } from './empdialog.component';

describe('EmpdialogComponent', () => {
  let component: EmpdialogComponent;
  let fixture: ComponentFixture<EmpdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
