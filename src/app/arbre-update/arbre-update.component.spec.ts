import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbreUpdateComponent } from './arbre-update.component';

describe('ArbreUpdateComponent', () => {
  let component: ArbreUpdateComponent;
  let fixture: ComponentFixture<ArbreUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbreUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbreUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
