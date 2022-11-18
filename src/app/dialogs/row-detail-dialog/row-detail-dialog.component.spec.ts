import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDetailDialogComponent } from './row-detail-dialog.component';

describe('RowDetailDialogComponent', () => {
  let component: RowDetailDialogComponent;
  let fixture: ComponentFixture<RowDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
