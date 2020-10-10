import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  title = 'K U R A H A R A masahiro';

  object: any = {
    name: 'kurahara',
    gender: undefined,
    birth: new Date(1990, 6,22),
    age: 30,
    family: ['父', '母', '兄'],
    work: function(){/* メソッドの中身*/},
    other:
    {
      favorite: 'ひまわり',
      memo: '強い',
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
