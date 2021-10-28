import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterScenarioComponent } from './ajouter-scenario.component';

describe('AjouterScenarioComponent', () => {
  let component: AjouterScenarioComponent;
  let fixture: ComponentFixture<AjouterScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
