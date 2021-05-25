import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-exist-request',
  templateUrl: './employee-exist-request.component.html',
  styleUrls: ['./employee-exist-request.component.scss']
})
export class EmployeeExistRequestComponent implements OnInit {


  public contentHeader: object
  editDisplayModal: boolean
  constructor() { }

  showEditModalDialog() {
    this.editDisplayModal = true;
  }
  UpdateEmployeeOffices() {
    this.editDisplayModal = false
  }
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
            name: 'employee exist request',
            isLink: false
          }
        ]
      }
    }
  }

}
