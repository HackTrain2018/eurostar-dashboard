import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHistoricalComponent } from './dashboard-historical.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';

export const appRoutes: Routes = [
    { path: '', component: DashboardHistoricalComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    DashboardWidgetModule
  ],
  declarations: [DashboardHistoricalComponent],
  exports: [ ]
})
export class DashboardHistoricalModule { }
