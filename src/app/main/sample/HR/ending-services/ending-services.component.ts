import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ending-services',
  templateUrl: './ending-services.component.html',
  styleUrls: ['./ending-services.component.scss']
})
export class EndingServicesComponent implements OnInit {

  public contentHeader: object
  editDisplayModal: boolean
  NewDisplayModal:boolean
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
            name: 'ending services',
            isLink: false
          }
        ]
      }
    }
  }

}
