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

  constructor (private sanitizer: DomSanitizer ) {
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.sanitizeHtml);
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.sanitizeUrl);
  }

  ngOnInit() {
  }

}
