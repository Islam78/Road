import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runaway-employees',
  templateUrl: './runaway-employees.component.html',
  styleUrls: ['./runaway-employees.component.scss']
})
export class RunawayEmployeesComponent implements OnInit {
// ِ
  

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
          name: 'Run Away Employees',
          isLink: false
        }
      ]
    }
  }
}


}
