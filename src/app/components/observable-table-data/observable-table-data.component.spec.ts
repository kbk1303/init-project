import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTableDataComponent } from './observable-table-data.component';

describe('ObservableTableDataComponent', () => {
  let component: ObservableTableDataComponent;
  let fixture: ComponentFixture<ObservableTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableTableDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
