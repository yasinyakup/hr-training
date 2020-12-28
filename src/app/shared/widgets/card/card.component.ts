import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widgetcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label: string = "";
  @Input() total: string = "";
  @Input() percentage: string = "";

  @Input() data = [];


  Highcharts= Highcharts;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2,2,2,2],
          height: 100
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend: {
        enabled: false
      },
      credits:{
        enabled: false
      },
      xAxis: {
        labels:{
        enabled:false
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTick:false,
        tickOptions: []
      },
      yAxis: {
        labels:{
        enabled:false
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTick:false,
        tickOptions: []
      },
      exporting:{
        enabled: false
      },
      series: [{
        data: this.data
      }]
  };

  }

}
