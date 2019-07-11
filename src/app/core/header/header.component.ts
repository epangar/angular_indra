import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  title: string;
  logo: string;

  constructor() { }
  
  ngOnInit() {
    this.title = 'TypeScript Indra';
    this.logo = '../../assets/logo.svg'
  }

}
