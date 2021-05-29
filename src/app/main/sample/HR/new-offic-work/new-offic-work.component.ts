import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offic-work',
  templateUrl: './new-offic-work.component.html',
  styleUrls: ['./new-offic-work.component.scss']
})
export class NewOfficWorkComponent implements OnInit {


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
