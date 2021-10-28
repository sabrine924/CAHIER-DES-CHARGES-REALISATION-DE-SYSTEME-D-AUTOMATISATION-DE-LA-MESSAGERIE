import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtemplatesmsComponent } from './listtemplatesms.component';

describe('ListtemplatesmsComponent', () => {
  let component: ListtemplatesmsComponent;
  let fixture: ComponentFixture<ListtemplatesmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtemplatesmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtemplatesmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
