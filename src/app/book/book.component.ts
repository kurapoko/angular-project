import { Component, Output, OnInit } from '@angular/core';
import { Book } from '../class/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  selected: Book;

  books = [
    {
      isbn: "123-4567-89",
      title: "ハリーポッター",
      price: 2500,
      publisher: "静山社"
    },
    {
      isbn: "123-4567-89",
      title: "アガサクリスティ",
      price: 2500,
      publisher: "静山社"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(book: Book) {
    this.selected = book;
  }
}
