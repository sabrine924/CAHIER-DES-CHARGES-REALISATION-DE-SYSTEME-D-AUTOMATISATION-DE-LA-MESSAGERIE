import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalselectnationaliteComponent } from './modalselectnationalite.component';

describe('ModalselectnationaliteComponent', () => {
  let component: ModalselectnationaliteComponent;
  let fixture: ComponentFixture<ModalselectnationaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalselectnationaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalselectnationaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
