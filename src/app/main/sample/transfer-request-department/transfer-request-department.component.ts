import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-request-department',
  templateUrl: './transfer-request-department.component.html',
  styleUrls: ['./transfer-request-department.component.scss']
})
export class TransferRequestDepartmentComponent implements OnInit {

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
            name: 'transfer request department' ,
            isLink: false
          }
        ]
      }
    }
  }
}
