import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit-request',
  templateUrl: './exit-request.component.html',
  styleUrls: ['./exit-request.component.scss']
})
export class ExitRequestComponent implements OnInit {


  public contentHeader: object
  editDisplayModal: boolean
  NewDisplayModal: boolean
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
            name: 'exist request',
            isLink: false
          }
        ]
      }
    }
  }
}
