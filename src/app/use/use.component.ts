import { Component, OnInit } from '@angular/core';
import { UseService } from '../service/use.service';

@Component({
  selector: 'app-use',
  templateUrl: './use.component.html',
  styleUrls: ['./use.component.scss'],
  providers: [
    { provide: UseService, useClass: UseService}
  ],
})
export class UseComponent implements OnInit {

  current: string;

  constructor( private use: UseService ) {
    this.current = use.show();
  }

  ngOnInit() {
  }

}
