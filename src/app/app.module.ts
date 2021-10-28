import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationemailtemplateComponent } from './creationemailtemplate/creationemailtemplate.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjouterScenarioComponent } from './ajouter-scenario/ajouter-scenario.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CreerscenarioComponent } from './creerscenario/creerscenario.component';
import { NgxFlowchartModule } from 'ngx-flowchart';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { TypemessagemodalComponent } from './typemessagemodal/typemessagemodal.component';
import { MatRadioModule } from '@angular/material/radio';
import { AttendremodalComponent } from './attendremodal/attendremodal.component';
import {MatSelectModule} from '@angular/material/select';
import { FiltermodalComponent } from './filtermodal/filtermodal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FiltermodalselectComponent } from './filtermodalselect/filtermodalselect.component';
import { ListTemplateComponent } from './list-template/list-template.component'; 
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListtemplatesmsComponent } from './listtemplatesms/listtemplatesms.component';
import { ModalselectnationaliteComponent } from './modalselectnationalite/modalselectnationalite.component';
import { ModalselectSituationfamilialComponent } from './modalselect-situationfamilial/modalselect-situationfamilial.component';















 

@NgModule({
  declarations: [
    AppComponent,
    CreationemailtemplateComponent,
    AjouterScenarioComponent,
    CreerscenarioComponent,
    TypemessagemodalComponent,
    AttendremodalComponent,
    FiltermodalComponent,
    FiltermodalselectComponent,
    ListTemplateComponent,
    ListtemplatesmsComponent,
    ModalselectnationaliteComponent,
    ModalselectSituationfamilialComponent,
   
   
   
  
    
    
  ],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularEditorModule,
    MatCheckboxModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserModule,
    DndModule,
    SweetAlert2Module.forRoot(),
    NgxFlowchartModule,
    NgxFlowchartModule,
    DiagramModule ,
    SweetAlert2Module.forRoot(),
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSortModule
 

    
    
 

    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
