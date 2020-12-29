
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IUser {
  id: string;
  name: string;
  age: number;
  title: string;
  hireDate: string;
  dept: string;


}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

 dataSource: MatTableDataSource<IUser>;
  users: IUser[];
  displayedColumns: String[]=['id','name', 'age', 'title', 'hireDate', 'dept'];
  @ViewChild(MatSort, { static: true })  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { 
    this.users = [
      {
        id:'1',
        name: 'yasin yakup',
        age: 36,
        title:'engineer',
        hireDate: '2020-01-15', 
        dept: "IT"
      },
      {
        id:'2',
        name: 'malih yayla',
        age: 27,
        title:'engineer',
        hireDate: '2020-03-15',
        dept: "IT"
      },
      {
        id:'3',
        name: 'bilal abdurahman',
        age: 30,
        title:'engineer',
        hireDate: '2020-09-05',
        dept: "IT"
      },
      {
        id:'4',
        name: 'bilal abdurahman',
        age: 30,
        title:'engineer',
        hireDate: '2020-09-05',
        dept: "IT"
      },
      {
        id:'5',
        name: 'bilal abdurahman',
        age: 30,
        title:'engineer',
        hireDate: '2020-09-05',
        dept: "IT"
      },
      {
        id:'6',
        name: 'bilal abdurahman',
        age: 30,
        title:'engineer',
        hireDate: '2020-09-05',
        dept: "IT"
      }
    ];

this.dataSource = new MatTableDataSource<IUser>(this.users);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

   WithoutTime(dateTime: Date) {
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}
}
