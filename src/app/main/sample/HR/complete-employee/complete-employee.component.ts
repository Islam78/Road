import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-employee',
  templateUrl: './complete-employee.component.html',
  styleUrls: ['./complete-employee.component.scss']
})
export class CompleteEmployeeComponent implements OnInit {

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
            name: 'Employment offices',
            isLink: false
          }
        ]
      }
    }
  }

}
