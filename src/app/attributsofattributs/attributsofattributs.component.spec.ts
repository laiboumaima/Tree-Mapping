import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributsofattributsComponent } from './attributsofattributs.component';

describe('AttributsofattributsComponent', () => {
  let component: AttributsofattributsComponent;
  let fixture: ComponentFixture<AttributsofattributsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributsofattributsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributsofattributsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
