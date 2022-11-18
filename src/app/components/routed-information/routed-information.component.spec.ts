import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedInformationComponent } from './routed-information.component';

describe('RoutedInformationComponent', () => {
  let component: RoutedInformationComponent;
  let fixture: ComponentFixture<RoutedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutedInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
