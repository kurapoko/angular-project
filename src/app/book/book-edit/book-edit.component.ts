import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Book } from '../../class/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @Input() item: Book;

  @Output() edited = new EventEmitter<Book> ();


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.edited.emit(this.item);
  }
}
