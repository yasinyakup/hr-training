import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart : any= [];
  smallChart : any= [];
  pieChart: any = [];
  constructor(private dashboardService: DashboardService ) { }

  ngOnInit(): void {
    this.bigChart= this.dashboardService.getCHartData();
    this.smallChart = this.dashboardService.getSmallChartData();
    this.pieChart = this.dashboardService.getPieData();
  }

}
