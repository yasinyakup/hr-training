import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from 'src/app/modules/user/user.component';
import { EmployeeComponent } from 'src/app/modules/employee/employee.component';
import { AddemployeeComponent } from 'src/app/modules/addemployee/addemployee.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtrainingComponent } from 'src/app/modules/addtraining/addtraining.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    UserComponent,
    EmployeeComponent,
    AddemployeeComponent,
    AddtrainingComponent
  ],
  imports: [
  CommonModule,
  RouterModule,
  SharedModule,
  MatSidenavModule,
  MatDividerModule,
  FlexLayoutModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  ReactiveFormsModule,
  BrowserModule,
  FormsModule

  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
