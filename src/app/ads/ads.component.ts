import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement';
import { ADVERTISEMENTS } from '../mock-advertisement';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  advertisements = ADVERTISEMENTS;
  constructor() { }

  ngOnInit() {
  }

}
