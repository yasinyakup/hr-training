import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreachartComponent } from './widgets/areachart/areachart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { HttpClientModule } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { EmployeeService } from './service/employee.service';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';




@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    AreachartComponent,
    CardComponent,
    PieComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    HttpClientModule,
    ObserversModule,
    MatTableModule,
    MatTreeModule
    
  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    AreachartComponent,
    CardComponent,
    PieComponent
  ],
  providers:[
    EmployeeService
  ]
})
export class SharedModule { }
