import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum4Component } from './praktikum4.component';

describe('Praktikum4Component', () => {
  let component: Praktikum4Component;
  let fixture: ComponentFixture<Praktikum4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
