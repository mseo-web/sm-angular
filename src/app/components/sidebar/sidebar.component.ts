import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Главная",
    rtlTitle: "Главная",
    icon: "icon-bank",
    class: ""
  },
  {
    path: "/projects",
    title: "Проекты",
    rtlTitle: "Проекты",
    icon: "icon-components",
    class: ""
  },
  {
    path: "/about",
    title: "О нас",
    rtlTitle: "О нас",
    icon: "icon-spaceship",
    class: ""
  },
  {
    path: "/contact",
    title: "Контакты",
    rtlTitle: "Контакты",
    icon: "icon-square-pin",
    class: ""
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "Админпанель",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "Иконки",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "Карты",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "Уведомления",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "Профиль пользователя",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "Список таблиц",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "Типография",
    icon: "icon-align-center",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
