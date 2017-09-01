import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

 import {FormsModule} from '@angular/forms';
//import { SubComponent }  from './sub_App';

 //import {HttpModule} from '@angular/http';
/*@NgModule({
  //imports:      [ BrowserModule,ReactiveFormsModule,FormsModule],
  imports:[BrowserModule,HttpModule,
    RouterModule.forRoot([
      {path:'departments', component:DepartmentList},
      {path:'employees',component:EmployeeList},
      {path:'departments/:id',component:DepartmentchildList}
    ])
],
  declarations: [ AppComponent,EmployeeComponent,DepartmentList,EmployeeList,DepartmentchildList ],
  bootstrap:    [ AppComponent ]
})*/

@NgModule({
  imports:[ BrowserModule,FormsModule,HttpModule
  ],
  declarations:[AppComponent],
  bootstrap :[AppComponent]
})
export class AppModule { }

