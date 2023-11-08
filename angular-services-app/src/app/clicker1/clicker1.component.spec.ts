import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clicker1Component } from './clicker1.component';

describe('Clicker1Component', () => {
  let component: Clicker1Component;
  let fixture: ComponentFixture<Clicker1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clicker1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clicker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
