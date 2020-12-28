import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface IUser {
  id: string;
  name: string;
  age: number;
  title: string;
  hireDate: Date;
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
  displayColumns: String[]=['id','name', 'age', 'title', 'hireDate', 'dept'];
  constructor() { 
    this.users = [
      {
        id:'1',
        name: 'yasin yakup',
        age: 36,
        title:'engineer',
        hireDate: new Date('2020-03-15'),
        dept: "IT"
      },
      {
        id:'2',
        name: 'malih yayla',
        age: 27,
        title:'engineer',
        hireDate: new Date('2020-01-15'),
        dept: "IT"
      },
      {
        id:'3',
        name: 'bilal abdurahman',
        age: 30,
        title:'engineer',
        hireDate: new Date('2020-09-15'),
        dept: "IT"
      }
    ];

this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
  }

}
