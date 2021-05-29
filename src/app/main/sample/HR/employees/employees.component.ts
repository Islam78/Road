import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeService } from '@core/services/addEmployee/add-employee.service';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  SearchArr
  SearchHeader
  MakeSearchArr() {
    this.SearchHeader= 'Employees'
    this.SearchArr = [
      { label: "Employee Name", Type: "text" },
      { label: "Job", Type: "text" },
      { label: "Id", Type: "number" }
    ]
  }
  constructor(private _serv: AddEmployeeService, public router: Router) { }
  public contentHeader: object
  editDisplayModal: boolean

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
