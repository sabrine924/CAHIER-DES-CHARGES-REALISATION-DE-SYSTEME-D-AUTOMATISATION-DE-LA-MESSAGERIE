import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterScenarioComponent } from './ajouter-scenario/ajouter-scenario.component';
import { AttendremodalComponent } from './attendremodal/attendremodal.component';
import { CreationemailtemplateComponent } from './creationemailtemplate/creationemailtemplate.component';
import { CreerscenarioComponent } from './creerscenario/creerscenario.component';
import { FiltermodalComponent } from './filtermodal/filtermodal.component';
import { ListTemplateComponent } from './list-template/list-template.component';
import { ListtemplatesmsComponent } from './listtemplatesms/listtemplatesms.component';
import { TypemessagemodalComponent } from './typemessagemodal/typemessagemodal.component';



const routes: Routes = [
  { path: 'Ajouterscenario', component: AjouterScenarioComponent },
  { path: 'Creationtemplate', component: CreationemailtemplateComponent },
  { path: 'Creationscenario', component: CreerscenarioComponent },
  {path: 'modal', component: TypemessagemodalComponent },
  {path: 'Attendremodal', component: AttendremodalComponent },
  {path: 'Filtermodal', component: FiltermodalComponent },
  {path: 'listtemplates', component: ListTemplateComponent },
  {path: 'listtemplatessms', component: ListtemplatesmsComponent },
  { path: '**', redirectTo: 'Ajouterscenario', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
}
