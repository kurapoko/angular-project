import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../class/book';

@Component({
  selector: 'app-multi-components-detail',
  templateUrl: './multi-components-detail.component.html',
  styleUrls: ['./multi-components-detail.component.scss']
})
export class MultiComponentsDetailComponent implements OnInit {

  @Input() item: Book;

  constructor() { }

  ngOnInit() {
  }

}
