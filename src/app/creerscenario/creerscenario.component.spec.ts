import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerscenarioComponent } from './creerscenario.component';

describe('CreerscenarioComponent', () => {
  let component: CreerscenarioComponent;
  let fixture: ComponentFixture<CreerscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
