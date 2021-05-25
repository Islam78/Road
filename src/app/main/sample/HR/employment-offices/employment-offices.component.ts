import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-offices',
  templateUrl: './employment-offices.component.html',
  styleUrls: ['./employment-offices.component.scss']
})
export class EmploymentOfficesComponent implements OnInit {
  public contentHeader: object
  editDisplayModal: boolean
  constructor() { }
  
  showEditModalDialog() {
    this.editDisplayModal = true;
  }
  UpdateEmployeeOffices(){
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
