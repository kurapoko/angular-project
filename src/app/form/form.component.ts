import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mail = new FormControl('hogehoge@mail.com', [
    Validators.required,
    Validators.email
  ]);
  passwd = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  name = new FormControl('山田太郎', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ]);
  memo = new FormControl('メモ', [
    Validators.maxLength(18)
  ]);

  // FormGroupオブジェクト

  myForm = this.builder.group({
    maill: this.mail,
    passwd: this.passwd,
    name: this.memo,
    memo: this.memo
  });

  constructor(private builder: FormBuilder ) { }

  ngOnInit() {
    console.log('')
  }

  show() {
    console.log('メールアドレス: ' + this.mail.value);
    console.log('パスワード: ' + this.passwd.value);
    console.log('名前：（漢字）:' + this.name.value);
    console.log('備考：' + this.memo.value);
    console.log('全て:');
    console.log(this.myForm.value);
  }


}
