import { Component, OnInit } from '@angular/core';
import { Book } from '../class/book'

@Component({
  selector: 'app-multi-components',
  templateUrl: './multi-components.component.html',
  styleUrls: ['./multi-components.component.scss']
})
export class MultiComponentsComponent implements OnInit {

  selected: Book;

  books: Book[]  = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

  onclick(book:Book) {
    this.selected = book;
  }

  onedited(book: Book) {
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
