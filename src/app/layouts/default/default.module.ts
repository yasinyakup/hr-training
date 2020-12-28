import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider'


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
  CommonModule,
  RouterModule,
  SharedModule,
  MatSidenavModule,
  MatDividerModule

  ]
})
export class DefaultModule { }
