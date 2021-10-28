import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermodalselectComponent } from './filtermodalselect.component';

describe('FiltermodalselectComponent', () => {
  let component: FiltermodalselectComponent;
  let fixture: ComponentFixture<FiltermodalselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltermodalselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltermodalselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
