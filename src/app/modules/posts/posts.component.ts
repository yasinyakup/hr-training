
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IUser {
  empNo: string;
  fullname: string;
  dept: string;
  title: string;
  trainingName: string;
  archiveNo: string;
  hour: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

 dataSource: MatTableDataSource<IUser>;
  users: IUser[];
  displayedColumns: String[]=['id','empNo', 'fullname', 'dept', 'title', 'trainingName', 'archiveNo', 'hour',  'actions'];
  @ViewChild(MatSort, { static: true })  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { 
    this.users = [
      {
        empNo: '99949270278',
        fullname: 'Yasin Yakup',
        dept: 'Bilgi İşlem',
        title: 'Mes Mühendisi',
        trainingName: 'MES Eğitimleri',
        archiveNo: 'CME301100802',
        hour: 2.5
      },
      {
        empNo: '99949270278',
        fullname: 'Yasin Yakup',
        dept: 'Bilgi İşlem',
        title: 'Mes Mühendisi',
        trainingName: 'MES Eğitimleri',
        archiveNo: 'CME301100802',
        hour: 2.5
      },{
        empNo: '99949270278',
        fullname: 'Yasin Yakup',
        dept: 'Bilgi İşlem',
        title: 'Mes Mühendisi',
        trainingName: 'MES Eğitimleri',
        archiveNo: 'CME301100802',
        hour: 2.5
      },{
        empNo: '99949270278',
        fullname: 'Yasin Yakup',
        dept: 'Bilgi İşlem',
        title: 'Mes Mühendisi',
        trainingName: 'MES Eğitimleri',
        archiveNo: 'CME301100802',
        hour: 2.5
      },{
        empNo: '99949270278',
        fullname: 'Yasin Yakup',
        dept: 'Bilgi İşlem',
        title: 'Mes Mühendisi',
        trainingName: 'MES Eğitimleri',
        archiveNo: 'CME301100802',
        hour: 2.5
      },{
        empNo: '99949270278',
        fullname: 'Yasin Yakup',
        dept: 'Bilgi İşlem',
        title: 'Mes Mühendisi',
        trainingName: 'MES Eğitimleri',
        archiveNo: 'CME301100802',
        hour: 2.5
      },
    ];

this.dataSource = new MatTableDataSource<IUser>(this.users);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

   applyFilter(event: any){
      const userFilterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = userFilterValue.trim().toLocaleLowerCase();
   }
}
