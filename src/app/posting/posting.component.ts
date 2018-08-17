import { Component, OnInit } from '@angular/core';
import { Posting } from '../posting'
import { POSTINGS } from '../mock-posting'

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  postings = POSTINGS;
  constructor() { }

  ngOnInit() {
  }

}
