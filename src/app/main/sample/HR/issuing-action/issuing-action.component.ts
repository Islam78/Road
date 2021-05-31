import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-issuing-action',
  templateUrl: './issuing-action.component.html',
  styleUrls: ['./issuing-action.component.scss']
})
export class IssuingActionComponent implements OnInit {

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
    this.SearchHeader= 'Issuing Action'
    this.SearchArr = [
      { label: "Office Name", Type: "text" },
      { label: "Employee Name", Type: "text" },
      { label: "Employee Id", Type: "number" },
    ]
  }
}
