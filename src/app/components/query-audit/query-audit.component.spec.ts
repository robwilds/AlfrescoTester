import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAuditComponent } from './query-audit.component';

describe('QueryAuditComponent', () => {
  let component: QueryAuditComponent;
  let fixture: ComponentFixture<QueryAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryAuditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
