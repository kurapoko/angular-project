import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  name = 'Angular'

  list = [
    {id: 1, name: 'kurahara'},
    {id: 2, name: 'masahiro'}
  ]

  image = 'http://www.wings.msn.to/image/wings.jpg';

  safeMsg: SafeHtml;
  safeUrl: SafeResourceUrl;

  sanitizeHtml: string = `
    <div>
      <p>WINGS プロジェクト</p>
    </div>
    <a href="https://www.yahoo.co.jp/">Yahoo.co.jp</a>
    <button>同意する</button>
    <input type="button" onclick="alert('OK')" value="クリック">
  `

  sanitizeUrl = 'https://www.yahoo.co.jp/';

  currentTime = '---'

  currentInputText = '';

  screenX: number = 0;
  screenY: number = 0;

  formInputText = '倉原';

  constructor (private sanitizer: DomSanitizer ) {
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.sanitizeHtml);
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.sanitizeUrl);
  }

  ngOnInit() {
  }

  showCurrentTime(e:any) {
    this.currentTime = new Date().toLocaleString();
    console.log(e);
  }

  showCurrentPoint(e:any) {
    this.screenX = e.screenX;
    this.screenY = e.screenY;
  }

  outerClick(e:any):void {
    console.log('outerをクリックしました。');
  }

  innerClick(e:any):void {
    e.stopPropagation();
    console.log('innerをクリックしました。');
  }

  showInputText(input: string) {
    this.currentInputText += `
    <li>${input}</li>
    `
  }
}
