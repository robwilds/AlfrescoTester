import { Routes } from '@angular/router';
import { AlfSearchForContentComponent } from './components/alf-search-for-content/alf-search-for-content.component';
import { QueryAuditComponent } from './components/query-audit/query-audit.component';
import { QueryPeopleGroupsComponent } from './components/query-people-groups/query-people-groups.component';

export const routes: Routes = [

  { path: 'alfsearchforcontent', component: AlfSearchForContentComponent },
  { path: 'queryAudit', component: QueryAuditComponent },
  { path: 'peoplegroups', component: QueryPeopleGroupsComponent }

];
