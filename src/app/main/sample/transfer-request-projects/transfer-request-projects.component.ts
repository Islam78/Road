import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-request-projects',
  templateUrl: './transfer-request-projects.component.html',
  styleUrls: ['./transfer-request-projects.component.scss']
})
export class TransferRequestProjectsComponent implements OnInit {

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
            name: 'transfer request project',
            isLink: false
          }
        ]
      }
    }
  }
}
