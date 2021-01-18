import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Book } from '../../class/book';

@Component({
  selector: 'app-multi-components-edit',
  templateUrl: './multi-components-edit.component.html',
  styleUrls: ['./multi-components-edit.component.scss']
})
export class MultiComponentsEditComponent implements OnInit {
  @Input() item: Book;
  @Output() edited = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  onsubmit():void {
    this.edited.emit(this.item);
    console.log(this.edited);  }

}
