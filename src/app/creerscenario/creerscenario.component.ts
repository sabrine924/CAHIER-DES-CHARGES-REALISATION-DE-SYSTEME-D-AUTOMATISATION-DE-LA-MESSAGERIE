import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { field, value } from '../global.model';
import {  ConnectorModel } from '@syncfusion/ej2-angular-diagrams';
import Swal from 'sweetalert2';
import { ATTRIBUTS } from '../Attributs.model';
import { Attributs } from '../Attributs';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { TypemessagemodalComponent } from '../typemessagemodal/typemessagemodal.component';
import { AttendremodalComponent } from '../attendremodal/attendremodal.component';
import { FiltermodalComponent } from '../filtermodal/filtermodal.component';
import { FiltermodalselectComponent } from '../filtermodalselect/filtermodalselect.component';
import { ModalselectnationaliteComponent } from '../modalselectnationalite/modalselectnationalite.component';
import { ModalselectSituationfamilialComponent } from '../modalselect-situationfamilial/modalselect-situationfamilial.component';







@Component({
  selector: 'app-creerscenario',
  templateUrl: './creerscenario.component.html',
  styleUrls: ['./creerscenario.component.css']
})
export class CreerscenarioComponent implements OnInit {


  public demo1TabIndex = 1;
 attributs= ATTRIBUTS;
 selectedattribut?: Attributs;
 type:any;



  
  content = 'short';
  count = 0;
  expanded = false;
  lastDropEvent: DndDropEvent[] = [];
  currentNodeData: any;
  modalRef: any;
  modalService: any;
  draggableIdGrid: any;
  MatDialogConfig: MatDialogConfig<any> | undefined;
  selectedIndex: any;

  public getConnectorDefaults(obj: ConnectorModel): any {
      obj.style = {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
          strokeWidth: 2
      }
      obj.targetDecorator = {
          style: {
              fill: '#6BA5D7',
              strokeColor: '#6BA5D7'
          }
      }
  }



  code = 0;
  active = 0;
 
  offx = 0;
  offy = 0;
  instance: | undefined;

  Envoyer:any;
  formdata!: FormGroup;
  Typeemail!: FormGroup;
  value:value={
    label:"",
    value:"",
  };
  success = false;
  
  fieldModels:Array<field>=[
    {
   "id":  "envoyer",  
   "label": "Envoyer",
   "type" : "paramètre ",
   "icon": "fa fa-paper-plane",
   

   
      
    },
    {
      "id":  "filtrer",
      "label":"Filtrer",
      "icon": " fa-filter"
    },
  {
    "id":  "attendre",
   "label": "Attendre",
   "icon" :"fa-hourglass-half",
   "type" : "paramètre "
  },
  { 
    "id":  "start",
    "label": "Start",
    "icon" : "fa-dot-circle-o"
  },
  { 
    "id":  "fin",
    "label": "Fin",
    "icon" :" fa-flag-checkered"
  },


  ];

  fieldModels1:Array<field>=[
    {
  
   

   
      
   
   
      "id":  "filtrer",
      "label":"Filtrer",
      "icon": " fa-filter"
    },
 
  { 
    "id":  "start",
    "label": "Start",
    "icon" : "fa-dot-circle-o"
  },
  


  ];


  modelFields:Array<field>=[];
  model:any = {
    attributes:this.modelFields
  };
  modelFields1:Array<field>=[];
  model1:any = {
    attributes:this.modelFields1
  };
  


  constructor(public dialog: MatDialog ) {
    
  
   }

 
   ngOnInit() {
 
   }

 
   public demo1BtnClick() {
     const tabCount = 3;
     this.demo1TabIndex = (this.demo1TabIndex + 1) % tabCount;
   }
  onDragEnd(event:DragEvent ) {
  
    console.log("drag ended", JSON.stringify(event, null, 2));
    //event.previousContainer.data[event.previousIndex]['id'];
   
    
  }
  onDragover(event:DragEvent) {
    
  }

  onDrop( event:DndDropEvent, list?:any[] ) {
    if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) 
    {
      
      if(event.dropEffect === "copy")
      event.data.name = event.data.type+'-'+new Date().getTime();
      //debugger
      let index = event.index;
      //debugger
      if( typeof index === "undefined" ) {
        //debugger
        index = list.length;
      }
      //debugger
      list.splice( index, 0, event.data );
   


    
    }
 
  }  

  onDragged( item:any, list:any[], effect:DropEffect ) {
  
    
  }
  onDragCanceled(event:DragEvent) {
  
  }
  onDragStart(event:DragEvent) {
   
  }
  onDraggableMoved(event: DragEvent) {
  }

  toggleValue(item: { selected: boolean; }){
    item.selected = !item.selected;
  }

  submit(){
    
      
    
  }
  addValue(values:any){
   
    
  }

  removeField(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this bloc!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary bloc has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary bloc is safe :)',
          'error'
        )
      }
    })
   
  }
  openModal(){
    
  }
 
  onSelect(Attribut: Attributs): void {
    this.selectedattribut = Attribut;
  }
 
getDraggableId(event:any){
  debugger
  this.draggableIdGrid = event.mouseEvent.target.id;
  console.log("get draggable  " + this.draggableIdGrid);
}
trackElement(_index: number, element: any) {
  return element ? element.guid : null
}
Showmodaltypemessage(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%" ;

 this.dialog.open(TypemessagemodalComponent,dialogConfig);
 
}
Showmodalfiltermodalselect(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%" ;

 this.dialog.open(FiltermodalselectComponent,dialogConfig);
 
}
Showattendremodal(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "70%" ;


 this.dialog.open(AttendremodalComponent,dialogConfig);
}
Showmodalfilter(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%" ;



 this.dialog.open(FiltermodalComponent,dialogConfig);

}
showmodalselectNationalite(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%" ;



 this.dialog.open(ModalselectnationaliteComponent,dialogConfig);

}
selectSituationFamilialeClient(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%" ;



 this.dialog.open(ModalselectSituationfamilialComponent,dialogConfig);
}
}





