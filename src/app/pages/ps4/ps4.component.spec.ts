import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PS4Component } from './ps4.component';

describe('PS4Component', () => {
  let component: PS4Component;
  let fixture: ComponentFixture<PS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
