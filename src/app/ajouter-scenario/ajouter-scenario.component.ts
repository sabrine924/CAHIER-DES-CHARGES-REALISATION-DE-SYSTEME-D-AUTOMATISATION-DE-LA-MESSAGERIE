import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-scenario',
  templateUrl: './ajouter-scenario.component.html',
  styleUrls: ['./ajouter-scenario.component.css']
})
export class AjouterScenarioComponent implements OnInit {

  
 
  baseURL = 'REST_API_URL_HERE'
  brandForm:FormGroup | undefined;
  isSubmitted = false;
  brandList: any;


 

  img:string = "assets/background.jpg"
 
  constructor(
    private router: Router, 
    private _http: HttpClient,
    private _fb: FormBuilder

  
  ) { }

  ngOnInit() {  
    this.brandForm = this._fb.group({
      id: [0],
      name: ['', Validators.required],
      is_active: [1],
    });

    

    
  }

  gotoCreationscenario(){
    this.router.navigate(['/Creationscenario']);
 
  }


 



  
 

}