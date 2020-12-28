import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMenu: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
   
  }

  toggleSidebar(){
    this.toggleSidebarForMenu.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 300);
  }

}