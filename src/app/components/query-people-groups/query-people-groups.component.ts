import { Component } from '@angular/core';
import { MatLabel,MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-query-people-groups',
  standalone: true,
  imports: [
    MatIcon,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule
  ],
  templateUrl: './query-people-groups.component.html',
  styleUrl: './query-people-groups.component.css'
})


export class QueryPeopleGroupsComponent{

  constructor(private http: HttpClient){}

  //auth = process.env["PASSENCODE"];
  baseURL = 'http://localhost:5000' //process.env["BASE_URL"];
  onlineQueryPath = '/alfresco/api/-default-/public/alfresco/versions/1/people?skipCount=0&maxItems=10000';
  localQueryPath = '/peoplegroups'
  peopleGroupData:any;

  showTable:boolean = false;
  userName:string = "";
  result:any;

  enterPressed(username?:any){
    this.showTable = true;
    alert("enter pressed with value " + this.userName);

    //this.result = RequestService.getQuery('/alfresco/api/-default-/public/alfresco/versions/1/people?skipCount=0&maxItems=10000')

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    //.set("Authorization", "Basic " + this.auth) //ZGVtbzpkZW1v
    //alert (returnVal);

    //now call the api endpoint to get the people group info
    //const returnVal = this.http.get(this.baseURL + '/peoplegroups');
    this.http.get(this.baseURL + '/peoplegroups',{headers}).subscribe(data =>
      {
        this.peopleGroupData = data;
        alert(this.peopleGroupData);
      })

    }

    }



