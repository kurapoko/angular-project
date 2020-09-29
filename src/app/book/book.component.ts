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
    this.selected = {
      isbn: book.isbn,
      title: book.title,
      price: book.price,
      publisher: book.publisher
    };
  }

  onEdited(book: Book) {
    for (let item of this.books) {
      if (item.isbn === book.isbn) {
        item.title = book.title;
        item.price = book.price;
        item.publisher = book.publisher;
      }
    }

    this.selected = null;
  }
}
