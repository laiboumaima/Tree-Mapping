import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateelementComponent } from './updateelement.component';

describe('UpdateelementComponent', () => {
  let component: UpdateelementComponent;
  let fixture: ComponentFixture<UpdateelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
