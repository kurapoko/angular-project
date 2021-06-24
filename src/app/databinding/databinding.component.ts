import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  currrentTime = '';

  // マウスオンイベント
  screenX = 0;
  screenY = 0;

  // 双方向バインディング
  myName: string;

  constructor () {
  }

  ngOnInit() {
  }

  showCurrentTime(e) {
    this.currrentTime = new Date().toDateString();
    console.log(e.clientY);
    console.dir(e);
  }

  showMouseonEvent(e) {
    this.screenX = e.screenX;
    this.screenY = e.screenY;
  }
}
