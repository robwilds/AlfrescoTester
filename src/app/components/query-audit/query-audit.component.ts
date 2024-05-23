import { Component, ChangeDetectorRef } from '@angular/core';
import { FloatLabelType, MatLabel,MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface auditData {
  user: string;
  entryDate: Date;
  nodeID: string;
  auditEntryID: string;
  details: string;
}

@Component({
  selector: 'app-query-audit',
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
  templateUrl: './query-audit.component.html',
  styleUrl: './query-audit.component.css'
})
export class QueryAuditComponent {

  constructor(private http: HttpClient,private changeDetectorRefs: ChangeDetectorRef){}

  //need to call service to get audit info for a nodeid
showTable:boolean = false;
showLoading:boolean = false;
nodeID:string = "7a0eb8ca-8b69-43b4-8062-4b79cbddc750";
auditEntryForNodeData:any;
displayedColumns: string[] = ['user', 'details', 'entryDate'];

baseURL = 'http://127.0.0.1:5202/auditentryfornode?nodeid=' //process.env["BASE_URL"];

enterPressed(node?:any){
  //alert("enter pressed with value " + this.nodeID);
  this.showLoading = true;

  //now call the routine to get the audit information for that node
this.http.get<auditData>(this.baseURL + this.nodeID).subscribe(data =>
  {
    this.showTable = true;
    this.auditEntryForNodeData = data;
    this.showLoading = false;
  })

  }
}
