import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfSearchForContentComponent } from './alf-search-for-content.component';

describe('AlfSearchForContentComponent', () => {
  let component: AlfSearchForContentComponent;
  let fixture: ComponentFixture<AlfSearchForContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlfSearchForContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlfSearchForContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
