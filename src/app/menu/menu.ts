import { CoreMenu } from '@core/types';

export const menu: CoreMenu[] = [
  // Apps & Pages
  {
    id: 'Hr',
    type: 'section',
    title: 'Hr',
    translate: 'HR',
    icon: 'box',
    children: [
      {
        id: 'ManageEmployee',
        title: 'Manage Employee',
        translate: 'ManageEmployee.title',
        icon: 'users',
        type: 'collapsible',
        children: [
          {
            id: 'addEmployee',
            title: 'Add Employee',
            translate: 'common.addEmployees',
            type: 'item',
            icon: 'circle',
            url: 'manage-employee/add'
          },
          {
            id: 'Employees',
            title: 'Employees',
            translate: 'common.employees',
            type: 'item',
            icon: 'circle',
            url: 'manage-employee/list'
          },
          {
            id: 'WaitingList',
            title: 'Waiting List',
            translate: 'ManageEmployee.waitingList',
            type: 'item',
            icon: 'circle',
            url: 'manage-employee/waiting-list'
          },
          {
            id: 'CompleteEmployee',
            title: 'Complete Employee',
            translate: 'ManageEmployee.completeEmployee',
            type: 'item',
            icon: 'circle',
            url: 'manage-employee/complete-employee'
          }
        ]
      },
      {
        id: 'AdminOffices',
        title: 'Admin Offices',
        translate: 'adminOffices.title',
        icon: 'briefcase',
        type: 'collapsible',
        children: [
          
          {
            id: 'NewOfficWork',
            title: 'Office Work ',
            translate: 'adminOffices.officeWork',
            type: 'item',
            icon: 'circle',
            url: 'admin-offices/new-office-work-list'
          },
          {
            id: 'AdminGroups',
            title: 'Admin Groups',
            translate: 'common.adminGroups',
            type: 'item',
            icon: 'circle',
            url: 'admin-offices/admin-groups'
          },
          {
            id: 'RecommendEmployee',
            title: 'Employment Offices',
            translate: 'adminOffices.recommendEmployee',
            type: 'item',
            icon: 'circle',
            url: 'admin-offices/recommend-employee'
          },
        ]
      },
      {
        id: 'Contracts',
        title: 'Contracts',
        translate: 'contracts.title',
        icon: 'clipboard',
        type: 'collapsible',
        children: [
          {
            id: 'IssuanceContracts',
            title: 'Issuance contracts',
            translate: 'contracts.IssuanceContracts',
            type: 'item',
            icon: 'circle',
            url: 'contracts/issuance-contracts'
          },
          {
            id: 'IssuingAction',
            title: 'Issuing Action',
            translate: 'contracts.IssuingAction',
            type: 'item',
            icon: 'circle',
            url: 'contracts/issuing-action'
          },
          {
            id: 'WorkDefinition',
            title: 'Work Definition',
            translate: 'contracts.WorkDefinition',
            type: 'item',
            icon: 'circle',
            url: 'contracts/work-definition'
          },
          {
            id: 'ResignationRequests',
            title: 'Resignation Requests',
            translate: 'contracts.ResignationRequests',
            type: 'item',
            icon: 'circle',
            url: 'contracts/resignation-requests'
          },
          {
            id: 'EndingServices',
            title: 'Ending Services',
            translate: 'contracts.EndingServices',
            type: 'item',
            icon: 'circle',
            url: 'contracts/ending-services'
          },
          {
            id: 'TransferRequestDepartment',
            title: 'Transfer Request Department',
            translate: 'contracts.TransferRequestDepartment',
            type: 'item',
            icon: 'circle',
            url: 'contracts/transfer-request-department'
          },
          {
            id: 'TransferRequestProjects',
            title: 'Transfer Request Projects',
            translate: 'contracts.TransferRequestProjects',
            type: 'item',
            icon: 'circle',
            url: 'contracts/transfer-request-projects'
          },
          {
            id: 'ExitRequest',
            title: 'Exit Request',
            translate: 'contracts.ExitRequest',
            type: 'item',
            icon: 'circle',
            url: 'contracts/exit-request'
          }
        ]
      },
      {
        id: 'AttendanceAndLeave',
        title: 'AttendanceAndLeave',
        translate: 'AttendanceAndLeave.title',
        icon: 'clock',
        type: 'collapsible',
        children: [
          {
            id: 'Attendance',
            title: 'Attendance and Departure',
            translate: 'AttendanceAndLeave.Attendance',
            type: 'item',
            icon: 'circle',
            url: 'attendance-and-leave/attendance'
          },
          {
            id: 'vacationRequest',
            title: 'vacation Request',
            translate: 'AttendanceAndLeave.vacationRequest',
            type: 'item',
            icon: 'circle',
            url: 'attendance-and-leave/vacation-request'
          },
          {
            id: 'employeeExistRequest',
            title: 'Employees Exist Request',
            translate: 'AttendanceAndLeave.employeeExistRequest',
            type: 'item',
            icon: 'circle',
            url: 'attendance-and-leave/employee-exist-request'
          },
          {
            id: 'AbsentEmployees',
            title: 'Absent Employees',
            translate: 'AttendanceAndLeave.AbsentEmployees',
            type: 'item',
            icon: 'circle',
            url: 'attendance-and-leave/absent-employees'
          },
          {
            id: 'RunAwayEmployees',
            title: 'Run Away Employees',
            translate: 'AttendanceAndLeave.RunAwayEmployees',
            type: 'item',
            icon: 'circle',
            url: 'attendance-and-leave/runAway-employees'
          },
          {
            id: 'EmployeesRefusingWork',
            title: 'Employees Refusing Work',
            translate: 'AttendanceAndLeave.EmployeesRefusingWork',
            type: 'item',
            icon: 'circle',
            url: 'attendance-and-leave/employees-refusing-work'
          }
        ]
      },
      {
        id: 'WarningsAndPenalties',
        title: 'WarningsAndPenalties',
        translate: 'WarningsAndPenalties.title',
        icon: 'edit-2',
        type: 'collapsible',
        children: [
          {
            id: 'WarningsAndPenalties_addEmployees',
            title: 'Add Employee',
            translate: 'common.addEmployees',
            type: 'item',
            icon: 'circle',
            url: 'warnings-and-penalties/new-employee'
          },
          {
            id: 'WarningsAndPenalties_Employees',
            title: 'Employees',
            translate: 'common.employees',
            type: 'item',
            icon: 'circle',
            url: 'warnings-and-penalties/employees'
          },
          {
            id: 'WarningsAndPenalties_adminGroups',
            title: 'Admin Groups',
            translate: 'common.adminGroups',
            type: 'item',
            icon: 'circle',
            url: 'warnings-and-penalties/admin-groups'
          }
        ]
      },
      {
        id: 'Reports',
        title: 'Reports',
        translate: 'Reports.title',
        icon: 'file',
        type: 'collapsible',
        children: [
          {
            id: 'Reports_addEmployees',
            title: 'Add Employee',
            translate: 'common.addEmployees',
            type: 'item',
            icon: 'circle',
            url: 'reports/new-employee'
          },
          {
            id: 'Reports_employees',
            title: 'Employees',
            translate: 'common.employees',
            type: 'item',
            icon: 'circle',
            url: 'reports/employees'
          },
          {
            id: 'Reports_adminGroups',
            title: 'Admin Groups',
            translate: 'common.adminGroups',
            type: 'item',
            icon: 'circle',
            url: 'reports/admin-groups'
          }
        ]
      }
    ],
  },
  {
    id: 'others',
    type: 'section',
    title: 'Sales Adminstration',
    translate: 'SalesAdminstration.title',
    icon: 'box',
    children: [
      {
        id: 'ManageClint',
        title: 'Manage Clint',
        translate: 'ManageClint.title',
        icon: 'users',
        type: 'collapsible',
        children: [
          {
            id: 'addClint',
            title: 'Add Clint',
            translate: 'ManageClint.AddClint',
            type: 'item',
            icon: 'circle',
            url: 'manage-clint/new-clint'
          }
        ]
      },
      {
        id: 'managementContracts',
        title: 'Contracts',
        translate: 'managementContracts.title',
        icon: 'clipboard',
        type: 'collapsible',
        children: [
          {
            id: 'ExitRequest',
            title: 'Exit Request',
            translate: 'managementContracts.ExitRequest',
            type: 'item',
            icon: 'circle',
            url: 'management-contracts/exit-request'
          }
        ]
      },
    ],

  },
];
