import { Component } from '@angular/core';
import { FloatLabelType, MatLabel,MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

export interface patientInfo {
  position:number;
  name: string;
  address: string;
  SSnumber: string;
  caseID:string;
  Alfresco: string;
  Alfresconode: string;
}

const ELEMENT_DATA: patientInfo[] = [
  {
    position: 1,
    name: 'Robert Wilds',
    address: '123 anywhere street orlando fl',
    SSnumber: 'xxx-xx-1234',
    caseID: 'CASE-1234',
    Alfresco: 'http://rwilds741.alfdemo.com/share/page/',
    Alfresconode: '7616bb0e-9d10-4bf0-928a-e6242e5a9f0d'
}

];

@Component({
  selector: 'app-alf-search-for-content',
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
  templateUrl: './alf-search-for-content.component.html',
  styleUrl: './alf-search-for-content.component.css'
})
export class AlfSearchForContentComponent {

  displayedColumns: string[] = ['position', 'name', 'address', 'SSnumber', 'caseID','Alfresco','Alfresconode'];
  dataSource = ELEMENT_DATA;


  value = 'Clear me';
  showTable:boolean = false;


  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  enterPressed(){
    this.showTable = true;

  }
  goToLink(url: string){
    window.open(url,'_blank');
}

}
