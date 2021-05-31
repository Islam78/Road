import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'others',
    type: 'section',
    title: 'Hr ',
    translate: 'MENU.HR',
    icon: 'box',
    children: [
      {
        id: 'ManageEmployee',
        title: 'Manage Employee',
        translate: 'MENU.ManageEmployee',
        icon: 'users',
        type: 'collapsible',
        children: [
          // NewOfficWork
          {
            id: 'addEmployee',
            title: 'Add Employee',
            translate: 'MENU.ADDEMPLOYEE',
            type: 'item',
            icon: 'circle',
            url: 'NewEmployee'
          },
          {
            id: 'NewOfficWork',
            title: 'Office Work ',
            translate: 'MENU.OfficWork',
            type: 'item',
            icon: 'circle',
            url: 'NewOfficWork'
          },
          {
            id: 'Employees',
            title: 'Employees',
            translate: 'MENU.EMPLOYEES',
            type: 'item',
            icon: 'circle',
            url: 'Employees'
          },
          {
            id: 'AdminGroups',
            title: 'Admin Groups',
            translate: 'MENU.ADMINGROUPS',
            type: 'item',
            icon: 'circle',
            url: 'AdminGroups'
          },
          {
            id: 'RecommendEmployee',
            title: 'Employment Offices',
            translate: 'MENU.RecommendEmployee',
            type: 'item',
            icon: 'circle',
            url: 'RecommendEmployee'
          },
          {
            id: 'WaitingList',
            title: 'Waiting List',
            translate: 'MENU.WaitingList',
            type: 'item',
            icon: 'circle',
            url: 'WaitingList'
          },
          {
            id: 'CompleteEmployee',
            title: 'Complete Employee',
            translate: 'MENU.CompleteEmployee',
            type: 'item',
            icon: 'circle',
            url: 'CompleteEmployee'
          }
        ]
      },
      {
        id: 'Contracts',
        title: 'Contracts',
        translate: 'MENU.Contracts',
        icon: 'clipboard',
        type: 'collapsible',
        children: [
          {
            id: 'IssuanceContracts',
            title: 'Issuance contracts',
            translate: 'MENU.IssuanceContracts',
            type: 'item',
            icon: 'circle',
            url: 'IssuanceContracts'
          },
          {
            id: 'IssuingAction',
            title: 'Issuing Action',
            translate: 'MENU.IssuingAction',
            type: 'item',
            icon: 'circle',
            url: 'IssuingAction'
          },
          {
            id: 'WorkDefinition',
            title: 'Work Definition',
            translate: 'MENU.WorkDefinition',
            type: 'item',
            icon: 'circle',
            url: 'WorkDefinition'
          },
          {
            id: 'ResignationRequests',
            title: 'Resignation Requests',
            translate: 'MENU.ResignationRequests',
            type: 'item',
            icon: 'circle',
            url: 'ResignationRequests'
          },
          {
            id: 'EndingServices',
            title: 'Ending Services',
            translate: 'MENU.EndingServices',
            type: 'item',
            icon: 'circle',
            url: 'EndingServices'
          },
          {
            id: 'TransferRequestDepartment',
            title: 'Transfer Request Department',
            translate: 'MENU.TransferRequestDepartment',
            type: 'item',
            icon: 'circle',
            url: 'TransferRequestDepartment'
          },
          {
            id: 'TransferRequestProjects',
            title: 'Transfer Request Projects',
            translate: 'MENU.TransferRequestProjects',
            type: 'item',
            icon: 'circle',
            url: 'TransferRequestProjects'
          },
          {
            id: 'ExitRequest',
            title: 'Exit Request',
            translate: 'MENU.ExitRequest',
            type: 'item',
            icon: 'circle',
            url: 'ExitRequest'
          }
        ]
      },
      {
        id: 'AttendanceAndLeave',
        title: 'AttendanceAndLeave',
        translate: 'MENU.AttendanceAndLeave',
        icon: 'clock',
        type: 'collapsible',
        children: [
          {
            id: 'Attendance',
            title: 'Attendance and Departure',
            translate: 'MENU.Attendance',
            type: 'item',
            icon: 'circle',
            url: 'Attendance'
          },
          {
            id: 'vacationRequest',
            title: 'vacation Request',
            translate: 'MENU.vacationRequest',
            type: 'item',
            icon: 'circle',
            url: 'vacationRequest'
          },
          {
            id: 'employeeExistRequest',
            title: 'Employees Exist Request',
            translate: 'MENU.employeeExistRequest',
            type: 'item',
            icon: 'circle',
            url: 'employeeExistRequest'
          },
          {
            id: 'AbsentEmpoyees',
            title: 'Absent Empoyees',
            translate: 'MENU.AbsentEmpoyees',
            type: 'item',
            icon: 'circle',
            url: 'AbsentEmpoyees'
          },
          {
            id: 'RunAwayEmployees',
            title: 'Run Away Employees',
            translate: 'MENU.RunAwayEmployees',
            type: 'item',
            icon: 'circle',
            url: 'RunAwayEmployees'
          },
          {
            id: 'EmployeesRefusingWork',
            title: 'Employees Refusing Work',
            translate: 'MENU.EmployeesRefusingWork',
            type: 'item',
            icon: 'circle',
            url: 'EmployeesRefusingWork'
          }
        ]
      },
      {
        id: 'WarningsAndPenalties',
        title: 'WarningsAndPenalties',
        translate: 'MENU.WarningsAndPenalties',
        icon: 'edit-2',
        type: 'collapsible',
        children: [
          {
            id: 'addEmployee2',
            title: 'Add Employee',
            translate: 'MENU.ADDEMPLOYEE',
            type: 'item',
            icon: 'circle',
            url: 'NewEmployee2'
          },
          {
            id: 'Employees2',
            title: 'Employees',
            translate: 'MENU.EMPLOYEES',
            type: 'item',
            icon: 'circle',
            url: 'Employees2'
          },
          {
            id: 'AdminGroups2',
            title: 'Admin Groups',
            translate: 'MENU.ADMINGROUPS',
            type: 'item',
            icon: 'circle',
            url: 'AdminGroups2'
          }
        ]
      },
      {
        id: 'Reports',
        title: 'Reports',
        translate: 'MENU.Reports',
        icon: 'file',
        type: 'collapsible',
        children: [
          {
            id: 'addEmployee3',
            title: 'Add Employee',
            translate: 'MENU.ADDEMPLOYEE',
            type: 'item',
            icon: 'circle',
            url: 'NewEmployee3'
          },
          {
            id: 'Employees3',
            title: 'Employees',
            translate: 'MENU.EMPLOYEES',
            type: 'item',
            icon: 'circle',
            url: 'Employees3'
          },
          {
            id: 'AdminGroups3',
            title: 'Admin Groups',
            translate: 'MENU.ADMINGROUPS',
            type: 'item',
            icon: 'circle',
            url: 'AdminGroups3'
          }
        ]
      }
    ],

  },
  {
    id: 'others',
    type: 'section',
    title: 'Sales Adminstration',
    translate: 'MENU.SalesAdminstration',
    icon: 'box',
    children: [
      {
        id: 'ManageClint',
        title: 'Manage Clint',
        translate: 'MENU.ManageClint',
        icon: 'users',
        type: 'collapsible',
        children: [
          {
            id: 'addClint',
            title: 'Add Clint',
            translate: 'MENU.AddClint',
            type: 'item',
            icon: 'circle',
            url: 'NewClint'
          }
        ]
      },
      {
        id: 'Contracts',
        title: 'Contracts',
        translate: 'MENU.Contracts',
        icon: 'clipboard',
        type: 'collapsible',
        children: [
          {
            id: 'ExitRequest',
            title: 'Exit Request',
            translate: 'MENU.ExitRequest',
            type: 'item',
            icon: 'circle',
            url: 'ExitRequest'
          }
        ]
      },
    ],

  },
]
