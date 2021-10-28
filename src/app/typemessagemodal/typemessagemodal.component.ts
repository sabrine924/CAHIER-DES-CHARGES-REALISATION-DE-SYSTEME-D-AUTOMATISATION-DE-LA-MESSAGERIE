import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typemessagemodal',
  templateUrl: './typemessagemodal.component.html',
  styleUrls: ['./typemessagemodal.component.css']
})
export class TypemessagemodalComponent implements OnInit {
  dialogRef: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClose() {
    
    this.dialogRef.close();
  }
 
  ListTemplates(){


    this.router.navigate(['/listtemplates']);
    
  }
  ListTemplatessms(){


    this.router.navigate(['/listtemplatessms']);

  }
}
