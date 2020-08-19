import { Component, OnInit } from '@angular/core';

import { Book } from './class/book';
import { BookService } from './service/book.service';
import { UseService } from './service/use.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books: Book[];

  constructor( private bookservice: BookService){
  }

  ngOnInit() {
    this.books = this.bookservice.getBooks();
  }
}
