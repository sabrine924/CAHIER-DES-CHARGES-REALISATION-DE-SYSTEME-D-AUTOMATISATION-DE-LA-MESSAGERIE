import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendremodalComponent } from './attendremodal.component';

describe('AttendremodalComponent', () => {
  let component: AttendremodalComponent;
  let fixture: ComponentFixture<AttendremodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendremodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendremodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
