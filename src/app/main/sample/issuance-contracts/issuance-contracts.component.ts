import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issuance-contracts',
  templateUrl: './issuance-contracts.component.html',
  styleUrls: ['./issuance-contracts.component.scss']
})
export class IssuanceContractsComponent implements OnInit {

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
            name: 'Issuance Contracts',
            isLink: false
          }
        ]
      }
    }
  }

}
