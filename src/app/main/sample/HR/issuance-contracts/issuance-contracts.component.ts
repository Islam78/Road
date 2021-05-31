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
      headerTitle: '',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: '',
            isLink: true,
            link: '/'
          },
          {
            name: '',
            isLink: false
          }
        ]
      }
    }
  }
  SearchArr
  SearchHeader
  MakeSearchArr() {
    this.SearchHeader= 'Issuing Contract'
    this.SearchArr = [
      { label: "Office Name", Type: "text" },
      { label: "Employee Name", Type: "text" },
      { label: "Employee Id", Type: "number" },
    ]
  }

}
