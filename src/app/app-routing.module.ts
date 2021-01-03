import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AddemployeeComponent } from './modules/addemployee/addemployee.component';
import { AddtrainingComponent } from './modules/addtraining/addtraining.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmployeeComponent } from './modules/employee/employee.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  {
    path: '',
    component:DefaultComponent,
    children:[
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'users',
        component: UserComponent
      },
      {
        path: 'employees',
        component: EmployeeComponent
      },
      {
        path: 'addemployee',
        component: AddemployeeComponent
      },
      {
        path: 'addtraining',
        component: AddtrainingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
