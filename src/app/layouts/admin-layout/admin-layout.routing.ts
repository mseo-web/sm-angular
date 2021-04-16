import { Routes } from "@angular/router";

import { HomeComponent } from "../../pages/home/home.component";
import { ProjectsComponent } from "../../pages/projects/projects.component";
import { ProjectDetailComponent } from "../../pages/project-detail/project-detail.component";
import { AboutComponent } from "../../pages/about/about.component";
import { ContactComponent } from "../../pages/contact/contact.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "project-detail/:id", component: ProjectDetailComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
];
