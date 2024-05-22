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

export interface peoplegps {
  user: string;
  status: number;
  group: number;
}
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
    MatFormFieldModule,
  ],
  templateUrl: './query-people-groups.component.html',
  styleUrl: './query-people-groups.component.css'
})

export class QueryPeopleGroupsComponent{

  constructor(private http: HttpClient){}

  displayedColumns: string[] = ['user', 'status', 'group'];

  //auth = process.env["PASSENCODE"];
  baseURL = 'http://127.0.0.1:5202' //process.env["BASE_URL"];
  onlineQueryPath = '/alfresco/api/-default-/public/alfresco/versions/1/people?skipCount=0&maxItems=10000';
  localQueryPath = '/peoplegroups'
  peopleGroupData:any;

  showTable:boolean = false;
  userName:string = "";
  result:any;

  enterPressed(username?:any){

    alert("enter pressed with value " + this.userName);

    //now call the api endpoint to get the people group info
    this.http.get<peoplegps>(this.baseURL + '/peoplegroups').subscribe(data =>
      {
        this.peopleGroupData = data;
        //alert(this.peopleGroupData);
        this.showTable = true;
      })

    }

    }



