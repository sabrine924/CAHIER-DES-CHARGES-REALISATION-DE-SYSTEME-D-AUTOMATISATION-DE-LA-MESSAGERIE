import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationemailtemplateComponent } from './creationemailtemplate.component';

describe('CreationemailtemplateComponent', () => {
  let component: CreationemailtemplateComponent;
  let fixture: ComponentFixture<CreationemailtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationemailtemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationemailtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
