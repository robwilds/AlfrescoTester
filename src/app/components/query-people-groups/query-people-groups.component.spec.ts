import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPeopleGroupsComponent } from './query-people-groups.component';

describe('QueryPeopleGroupsComponent', () => {
  let component: QueryPeopleGroupsComponent;
  let fixture: ComponentFixture<QueryPeopleGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryPeopleGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryPeopleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
