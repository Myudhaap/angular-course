import {Routes} from "@angular/router";
import {TodosComponent} from "./demos/todos/todos.component";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {RouteParamsAndQueryComponent} from "./demos/route-params-and-query/route-params-and-query.component";
import {ComponentAComponent} from "./demos/route-params-and-query/component-a/component-a.component";
import {ComponentBComponent} from "./demos/route-params-and-query/component-b/component-b.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {LogoutComponent} from "./auth/components/logout/logout.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: HomeComponent
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "params",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadComponent: () => import("./demos/route-params-and-query/route-params-and-query.component").then(c => c.RouteParamsAndQueryComponent),
    children: [
      {
        path: "component-a/:id",
        loadComponent: () => import("./demos/route-params-and-query/component-a/component-a.component").then(c => c.ComponentAComponent)
      },
      {
        path: "component-b",
        loadComponent: () => import("./demos/route-params-and-query/component-b/component-b.component").then(c => c.ComponentBComponent)
      },
    ]
  },
  {
    path: "portofolio",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "todos",
        title: "Portofolio - Todos",
        component: TodosComponent
      },
      {
        path: "todos/:id",
        title: "Portofolio - Todos",
        component: TodosComponent
      }
    ]
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]
