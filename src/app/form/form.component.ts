import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user = {
    mail: 'hogehoge@mail.com',
    passwd: '',
    name: '山田太郎',
    memo: 'メモ'
  };

  constructor() { }

  ngOnInit() {
    console.log('')
  }

}
