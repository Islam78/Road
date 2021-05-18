import { Component, OnInit } from '@angular/core';
import { AddEmployeeService } from '@core/services/addEmployee/add-employee.service';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  fake: any = [{
    "status": true,
    "data": [
      {
        "email": "test@test.com",
        "name": "Mazen",
        "id": 39,
        "user_id": 38,
        "age": null,
        "img_path": null,
        "nationality": null,
        "total_salary": null,
        "basic_salary": null,
        "transfer_allowance": null,
        "housing_allowance": null,
        "subsistence_allowance": null,
        "board_number": null,
        "birthdate": null,
        "direct_action_date": null,
        "end_action_date": null,
        "end_insurance_date": null,
        "end_residence_date": null,
        "issuance_passport_date": null,
        "expiration_passport_date": null,
        "travel_date": null,
        "visa_number": null,
        "carrier_company": null,
        "passport_number": null,
        "job_number": null,
        "residence_number": null,
        "insurance_number": null,
        "mobility_number": null,
        "sick_absence_number": null,
        "unexcusedabsences_number": null,
        "actual_job": null,
        "visa_job": null,
        "gender": null,
        "blood_type": null,
        "employee_status": null,
        "fingerprint": null,
        "contract_copy": null,
        "passport_copy": null,
        "residence_copy": null,
        "insurance_copy": null,
        "employee_status_copy": null,
        "direct_work_copy": null,
        "visa_copy": null,
        "mobile_type": null,
        "kingdom_entry_port": null,
        "kingdom_entry_date": null,
        "shirt_size": null,
        "pants_size": null,
        "shoe_size": null,
        "created_at": "2021-05-10 18:27:00",
        "updated_at": "2021-05-10 18:27:00"
      },
      {
        "email": "test1@test.com",
        "name": "Mazen",
        "id": 40,
        "user_id": 39,
        "employee_name": "tes1t",
        "age": null,
        "img_path": null,
        "nationality": null,
        "total_salary": null,
        "basic_salary": null,
        "transfer_allowance": null,
        "housing_allowance": null,
        "subsistence_allowance": null,
        "board_number": null,
        "birthdate": null,
        "direct_action_date": null,
        "end_action_date": null,
        "end_insurance_date": null,
        "end_residence_date": null,
        "issuance_passport_date": null,
        "expiration_passport_date": null,
        "travel_date": null,
        "visa_number": null,
        "carrier_company": null,
        "passport_number": null,
        "job_number": null,
        "residence_number": null,
        "insurance_number": null,
        "mobility_number": null,
        "sick_absence_number": null,
        "unexcusedabsences_number": null,
        "actual_job": null,
        "visa_job": null,
        "gender": null,
        "blood_type": null,
        "employee_status": null,
        "fingerprint": null,
        "contract_copy": null,
        "passport_copy": null,
        "residence_copy": null,
        "insurance_copy": null,
        "employee_status_copy": null,
        "direct_work_copy": null,
        "visa_copy": null,
        "mobile_type": null,
        "kingdom_entry_port": null,
        "kingdom_entry_date": null,
        "shirt_size": null,
        "pants_size": null,
        "shoe_size": null,
        "created_at": "2021-05-10 18:28:54",
        "updated_at": "2021-05-10 18:28:54"
      }
    ],
    "msg": null
  }]
  constructor(private _serv: AddEmployeeService) { }


  ngOnInit(): void {
    this.fake = this.fake[0].data
    console.log(this.fake);
    this._serv.allEmployees().subscribe(res => {
      console.log(res);

    })

    this.kitchenSinkRows = this.rows;
    this.rows = this.fake;
    this.tempData = this.rows;
    this.kitchenSinkRows = this.rows;
    this.exportCSVData = this.rows;

  }
  // Private
  private _unsubscribeAll: Subject<any>;
  private tempData = [];

  // public
  public contentHeader: object;
  public rows: any;
  public selected = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;
  table: any
  _snippetCodeKitchenSink
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 ||
             d.email.toLowerCase().indexOf(val) !== -1|| !val;
    });
    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }


}
