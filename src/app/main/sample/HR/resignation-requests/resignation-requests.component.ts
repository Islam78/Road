import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resignation-requests',
  templateUrl: './resignation-requests.component.html',
  styleUrls: ['./resignation-requests.component.scss']
})
export class ResignationRequestsComponent implements OnInit {

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
            name: 'resignation requests',
            isLink: false
          }
        ]
      }
    }
  }

}
