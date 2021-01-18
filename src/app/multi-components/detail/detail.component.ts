import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../class/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() item: Book;

  constructor() { }

  ngOnInit() {
  }

}
