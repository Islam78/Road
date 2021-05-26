import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { CoreCommonModule } from '@core/common.module'

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module'

import { SampleComponent } from './sample.component'
import { HomeComponent } from './home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AddEmployeeComponent } from './HR/add-employee/add-employee.component'
import { CommonModule } from '@angular/common'
import { NgSelectModule } from '@ng-select/ng-select'
import { CoreDirectivesModule } from '@core/directives/directives'
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module'
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { FileUploadModule } from 'ng2-file-upload';
import { EmployeesComponent } from './HR/employees/employees.component';
import { CsvModule } from '@ctrl/ngx-csv';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxBarcodeModule } from 'ngx-barcode'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastrModule } from 'ngx-toastr';
import { AdminGroupsComponent } from './HR/admin-groups/admin-groups.component'
//  primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
// component
import { IssuanceContractsComponent } from './HR/issuance-contracts/issuance-contracts.component';
import { IssuingActionComponent } from './HR/issuing-action/issuing-action.component';
import { WorkDefinitionComponent } from './HR/work-definition/work-definition.component';
import { ResignationRequestsComponent } from './HR/resignation-requests/resignation-requests.component';
import { EndingServicesComponent } from './HR/ending-services/ending-services.component';
import { TransferRequestDepartmentComponent } from './HR/transfer-request-department/transfer-request-department.component';
import { TransferRequestProjectsComponent } from './HR/transfer-request-projects/transfer-request-projects.component';
import { ExitRequestComponent } from './HR/exit-request/exit-request.component';
import { EmploymentOfficesComponent } from './HR/employment-offices/employment-offices.component';
import { WaitingListComponent } from './HR/waiting-list/waiting-list.component';
import { CompleteEmployeeComponent } from './HR/complete-employee/complete-employee.component';
import { AttendanceComponent } from './HR/attendance/attendance.component';
import { VacationRequestComponent } from './HR/vacation-request/vacation-request.component';
import { EmployeeExistRequestComponent } from './HR/employee-exist-request/employee-exist-request.component';
import { AbsenteeEmployeesComponent } from './HR/absentee-employees/absentee-employees.component';
import { RunawayEmployeesComponent } from './HR/runaway-employees/runaway-employees.component';
import { EmployeesRefusingWorkComponent } from './HR/employees-refusing-work/employees-refusing-work.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'NewEmployee',
    component: AddEmployeeComponent,
  },
  {
    path: 'EditEmployee/:id',
    component: AddEmployeeComponent
  },
  {
    path: 'Employees',
    component: EmployeesComponent
  },
  {
    path: 'AdminGroups',
    component: AdminGroupsComponent
  },
  {
    path: 'IssuanceContracts',
    component: IssuanceContractsComponent
  },
  {
    path: 'IssuingAction',
    component: IssuingActionComponent
  },
  {
    path: 'WorkDefinition',
    component: WorkDefinitionComponent
  },
  {
    path: 'ResignationRequests',
    component: ResignationRequestsComponent
  },
  {
    path: 'EndingServices',
    component: EndingServicesComponent
  },
  {
    path: 'TransferRequestDepartment',
    component: TransferRequestDepartmentComponent
  },
  {
    path: 'TransferRequestProjects',
    component: TransferRequestProjectsComponent
  },
  {
    path: 'ExitRequest',
    component: ExitRequestComponent
  },
  {
    path: 'EmploymentOffices',
    component: EmploymentOfficesComponent
  },
  {
    path: 'WaitingList',
    component: WaitingListComponent
  },
  {
    path: 'CompleteEmployee',
    component: CompleteEmployeeComponent
  },
  {
    path: 'Attendance',
    component: AttendanceComponent
  },
  {
    path: 'vacationRequest',
    component: VacationRequestComponent
  },
  {
    path: 'employeeExistRequest',
    component: EmployeeExistRequestComponent
  },
  {
    path: 'AbsentEmpoyees',
    component: AbsenteeEmployeesComponent
  },
  {
    path: 'RunAwayEmployees',
    component: RunawayEmployeesComponent
  },
  {
    path: 'EmployeesRefusingWork',
    component: EmployeesRefusingWorkComponent
  }
  //Employees-refusing-work
]


@NgModule({
  declarations: [SampleComponent, HomeComponent, AddEmployeeComponent, EmployeesComponent, AdminGroupsComponent, IssuanceContractsComponent, IssuingActionComponent, WorkDefinitionComponent, ResignationRequestsComponent, EndingServicesComponent, TransferRequestDepartmentComponent, TransferRequestProjectsComponent, ExitRequestComponent, EmploymentOfficesComponent, WaitingListComponent, CompleteEmployeeComponent, AttendanceComponent, VacationRequestComponent, EmployeeExistRequestComponent, AbsenteeEmployeesComponent, RunawayEmployeesComponent, EmployeesRefusingWorkComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    CoreCommonModule,
    CardSnippetModule,
    CoreDirectivesModule,
    Ng2FlatpickrModule,
    NgSelectModule,
    FileUploadModule,
    CardSnippetModule,
    NgxDatatableModule,
    CsvModule,
    NgxBarcodeModule,
    NgbModule,
    ToastrModule,
    TableModule,
    DialogModule,
    ButtonModule,
    MessagesModule,


  ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule { }
