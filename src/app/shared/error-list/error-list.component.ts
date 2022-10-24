import { Component, Input, OnInit } from '@angular/core';
import { ErrorModel } from 'src/app/core/model/error';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss']
})
export class ErrorListComponent implements OnInit {
  errorList: Array<string> = [];

  @Input()
  set data(errorObj: any) {
    console.log(errorObj);
    this.errorList = Object.keys(errorObj).flatMap((key) => `${key}: ${errorObj[key]}`);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
