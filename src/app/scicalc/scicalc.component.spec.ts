import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScicalcComponent } from './scicalc.component';

describe('ScicalcComponent', () => {
  let component: ScicalcComponent;
  let fixture: ComponentFixture<ScicalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScicalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScicalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
