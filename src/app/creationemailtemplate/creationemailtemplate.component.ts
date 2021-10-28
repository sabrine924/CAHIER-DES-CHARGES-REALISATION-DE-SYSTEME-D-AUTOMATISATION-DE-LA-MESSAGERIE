import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { field, value } from '../global.model';
import swal from 'sweetalert2';
@Component({
  selector: 'app-creationemailtemplate',
  templateUrl: './creationemailtemplate.component.html',
  styleUrls: ['./creationemailtemplate.component.css']
})
export class CreationemailtemplateComponent implements OnInit {


   
  formdata!: FormGroup;
  Typeemail!: FormGroup;
  value:value={
    label:"",
    value:"",
  };
  success = false;


  fieldModels:Array<field>=[
    {
      "type": "text",
      "icon": "fa-font",
      "label": "Text",
      "description": "Enter your name",
      "placeholder": "Enter your name",
      "className": "form-control",
      "subtype": "text",
      "regex" : "",
      "handle":true
    },
    
   
   
    
   
   
   
   
    
  ];

  modelFields:Array<field>=[];
  model:any = {
    name:'App name...',
    description:'App Description...',
    theme:{
      bgColor:"ffffff",
      textColor:"555555",
      bannerImage:""
    },
    attributes:this.modelFields
  };

  report = false;
  reports:any = [];

 
  constructor(private formBuilder: FormBuilder,fb: FormBuilder) { 
    this.Typeemail = fb.group({
     consultable: false,
     modifiable: false,
     confirmable: false
    });
  
  }
  onClickSubmit(data: any) {
     
  }
  ngOnInit(): void {
  this.formdata = this.formBuilder.group({
            description: ['', [Validators.required,
              Validators.maxLength(400), Validators.minLength(5)]]
        });
  }
  onDragEnd(event:DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
    
  onDrop( event:DndDropEvent, list?:any[] ) {
    if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
      
      if(event.dropEffect === "copy")
      event.data.name = event.data.type+'-'+new Date().getTime();
      let index = event.index;
      if( typeof index === "undefined" ) {
        index = list.length;
      }
      list.splice( index, 0, event.data );
    }
  }
  onDragged( item:any, list:any[], effect:DropEffect ) {
    if( effect === "move" ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }
  onDragCanceled(event:DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  onDragStart(event:DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  onDraggableCopied(event:DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  onDraggableLinked(event:DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
  onDragover(event:DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  updateForm(){
    let input = new FormData;
    input.append('id',this.model._id);
    input.append('name',this.model.name);
    input.append('description',this.model.description);
    input.append('bannerImage',this.model.theme.bannerImage);
    input.append('bgColor',this.model.theme.bgColor);
    input.append('textColor',this.model.theme.textColor);
    input.append('attributes',JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }
  removeField(i: any){

  

  }
  initReport(){
    this.report = true; 
    let input = {
      id:this.model._id
    }
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }
  toggleValue(item: { selected: boolean; }){
    item.selected = !item.selected;
  }

  submit(){
    
      
    
  }
  addValue(values:any){
    values.push(this.value);
    this.value={label:"",value:""};
  }

}

