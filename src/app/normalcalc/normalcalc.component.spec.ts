import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalcalcComponent } from './normalcalc.component';

describe('NormalcalcComponent', () => {
  let component: NormalcalcComponent;
  let fixture: ComponentFixture<NormalcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
