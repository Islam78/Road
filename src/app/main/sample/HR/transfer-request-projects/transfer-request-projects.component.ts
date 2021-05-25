import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-request-projects',
  templateUrl: './transfer-request-projects.component.html',
  styleUrls: ['./transfer-request-projects.component.scss']
})
export class TransferRequestProjectsComponent implements OnInit {

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
            name: 'Transfer Request project',
            isLink: false
          }
        ]
      }
    }
  }
}
