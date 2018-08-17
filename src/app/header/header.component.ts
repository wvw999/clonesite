import { Component, OnInit } from '@angular/core';
import { Header } from '../header';
import { HEADERS } from '../mock-header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headers = HEADERS;
  constructor() { }

  ngOnInit() {
  }

}
