import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit-request',
  templateUrl: './exit-request.component.html',
  styleUrls: ['./exit-request.component.scss']
})
export class ExitRequestComponent implements OnInit {

  public contentHeader: object
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Hr',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Contract',
            isLink: true,
            link: '/'
          },
          {
            name: 'exit request',
            isLink: false
          }
        ]
      }
    }
  }

}
