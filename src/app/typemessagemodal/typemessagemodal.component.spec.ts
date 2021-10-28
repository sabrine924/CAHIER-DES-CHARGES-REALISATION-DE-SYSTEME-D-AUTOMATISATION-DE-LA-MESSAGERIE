import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemessagemodalComponent } from './typemessagemodal.component';

describe('TypemessagemodalComponent', () => {
  let component: TypemessagemodalComponent;
  let fixture: ComponentFixture<TypemessagemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypemessagemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypemessagemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
