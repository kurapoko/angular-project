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

  image = 'http://www.wings.msn.to/image/wings.jpg'
  from = 'aaaa'
  msg = '';

  books: Book[];

  constructor( private bookservice: BookService){
  }

  ngOnInit() {
    this.books = this.bookservice.getBooks();
  }

  show() {
    this.msg = new Date().toLocaleString();
  }

  showEvent(e:any) {
    this.msg = new Date().toLocaleString();
    console.log(e);
  }
}
