import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendremodal',
  templateUrl: './attendremodal.component.html',
  styleUrls: ['./attendremodal.component.css']
})
export class AttendremodalComponent implements OnInit {
  @ViewChild('closebutton')
  closebutton!: { nativeElement: { click: () => void; }; };
 

  ruleValueFields: any;
  evaluationRuleValue  : any;
  selected : any;
  

   evaluationRuleFields = [
    {value:"Quotidien",valueFieldType:'Quotidien',viewValue:"Quotidien"},
    {value:"Mensuelle",valueFieldType:'Mensuelle',viewValue:"Mensuelle"},
    {value:"Hebdomadaire",valueFieldType:'Hebdomadaire',viewValue:"Hebdomadaire"},
   
  ]



  constructor( private router: Router, ) { }

  ngOnInit(): void {
  }
  
  public onSave() {
    this.closebutton.nativeElement.click();
  }


}

