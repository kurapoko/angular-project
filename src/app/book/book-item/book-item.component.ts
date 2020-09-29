import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../class/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() selectedBook: Book;

  constructor() { }

  ngOnInit() {
  }

}
