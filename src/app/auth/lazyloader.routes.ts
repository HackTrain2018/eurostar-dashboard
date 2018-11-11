import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { DashboardRealTimeComponent } from "../dashboard-real-time/dashboard-real-time.component";
import { DashboardHistoricalComponent } from "../dashboard-historical/dashboard-historical.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "dashboard-realtime", component: DashboardRealTimeComponent },
      { path: "dashboard-historical", component: DashboardHistoricalComponent },
      { path: "maps", loadChildren: "../maps/maps.module#MapsModule" }
    ]
  }
];
