import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedCutomerListComponent } from './grouped-cutomer-list.component';

describe('GroupedCutomerListComponent', () => {
  let component: GroupedCutomerListComponent;
  let fixture: ComponentFixture<GroupedCutomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedCutomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedCutomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
