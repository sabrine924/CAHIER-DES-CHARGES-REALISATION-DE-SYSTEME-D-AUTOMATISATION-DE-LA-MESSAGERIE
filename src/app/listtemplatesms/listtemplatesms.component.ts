import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface TemplateElement {
  name: string;
  created_date: string;
  id: number;
 
}
const ELEMENT_DATA_SMS: TemplateElement[] = [
  { id: 1, name: 'SMSTemplate1',  created_date:'01-07-2020'},
  {id: 2, name: 'SMSTemplate2',   created_date:'02-07-2021'},
  {id: 3, name: 'SMSTemplate3',   created_date:'03-07-2021'},
  {  id: 4, name:'SMSTemplate4', created_date:'04-07-2022'},
  { id: 5,name: 'SMSTemplate5',   created_date:'05-07-2021'},
  {  id: 6, name:'SMSTemplate6', created_date:'05-07-2008'},
  {  id: 7, name:'SMSTemplate7', created_date:'05-07-2019'},
 
  
];
@Component({
  selector: 'app-listtemplatesms',
  templateUrl: './listtemplatesms.component.html',
  styleUrls: ['./listtemplatesms.component.css']
})
export class ListtemplatesmsComponent implements AfterViewInit {


 
  constructor(
    private router: Router, 
  

  
  ) { }
  displayedColumns: string[] = ['id', 'name',  'created_date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_SMS);

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ApplyFilter(filterValue:any)
  {
    this.dataSource.filter=filterValue.value.trim().toLowerCase()
  }
  GotoScenario(){
    this.router.navigate(['/Creationscenario']);
  }

}
