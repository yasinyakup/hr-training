import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getCHartData(){
    return [
    {
      name: 'yasin',
      data: [23,35,42,19,36,48,99]
    },
    {
      name: 'melih',
      data: [23,45,42,39,36,48,39]
    },
    {
      name: 'bilal',
      data: [23,35,42,19,36,48,99]
    },
    {
      name: 'ömer',
      data: [23,35,42,19,36,48,99]
    },
    {
      name: 'şevket',
      data: [23,35,42,19,36,48,99]
    }
  ];
}
getSmallChartData(){
  return [71, 78, 59, 65, 45];
}

getPieData(){
 return [{
    name: 'Chrome',
    y: 61.41,
    sliced: true,
    selected: true
}, {
    name: 'Internet Explorer',
    y: 11.84
}, {
    name: 'Firefox',
    y: 10.85
}, {
    name: 'Edge',
    y: 4.67
}, {
    name: 'Safari',
    y: 4.18
}, {
    name: 'Sogou Explorer',
    y: 1.64
}, {
    name: 'Opera',
    y: 1.6
}, {
    name: 'QQ',
    y: 1.2
}, {
    name: 'Other',
    y: 2.61
}]
}
}
