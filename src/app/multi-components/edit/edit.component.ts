import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Book } from '../../class/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() item: Book;
  @Output() edited = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  onsubmit():void {
    this.edited.emit(this.item);
    console.log(this.edited);
  }
}
