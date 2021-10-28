import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalselectSituationfamilialComponent } from './modalselect-situationfamilial.component';

describe('ModalselectSituationfamilialComponent', () => {
  let component: ModalselectSituationfamilialComponent;
  let fixture: ComponentFixture<ModalselectSituationfamilialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalselectSituationfamilialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalselectSituationfamilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
