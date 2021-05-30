import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend-employee',
  templateUrl: './recommend-employee.component.html',
  styleUrls: ['./recommend-employee.component.scss']
})
export class RecommendEmployeeComponent implements OnInit {

  contentHeader: object
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
