import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHistoricalComponent } from './dashboard-historical.component';

describe('DashboardHistoricalComponent', () => {
  let component: DashboardHistoricalComponent;
  let fixture: ComponentFixture<DashboardHistoricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHistoricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
