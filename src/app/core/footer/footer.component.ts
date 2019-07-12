import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo';
  }

}
