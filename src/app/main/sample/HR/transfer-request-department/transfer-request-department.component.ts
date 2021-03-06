import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-request-department',
  templateUrl: './transfer-request-department.component.html',
  styleUrls: ['./transfer-request-department.component.scss']
})
export class TransferRequestDepartmentComponent implements OnInit {

  public contentHeader: object
  editDisplayModal: boolean
  NewDisplayModal :boolean
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
            name: 'Transfer Request department',
            isLink: false
          }
        ]
      }
    }
  }

}
