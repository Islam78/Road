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
          {
            id: 'addEmployee',
            title: 'Add Employee',
            translate: 'MENU.ADDEMPLOYEE',
            type: 'item',
            icon: 'circle',
            url: 'NewEmployee'
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
          },

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
            id: 'AttendanceAndDeparture',
            title: 'Attendance and Departure',
            translate: 'MENU.AttendanceAndDeparture',
            type: 'item',
            icon: 'circle',
            url: 'AttendanceAndDeparture'
          },
          {
            id: 'RequestEmergencyLeave',
            title: 'Request emergency leave',
            translate: 'MENU.RequestEmergencyLeave',
            type: 'item',
            icon: 'circle',
            url: 'RequestEmergencyLeave'
          },
          {
            id: 'AnnualLeaveQequest',
            title: 'Annual Leave Qequest',
            translate: 'MENU.AnnualLeaveQequest',
            type: 'item',
            icon: 'circle',
            url: 'AnnualLeaveQequest'
          },
          {
            id: 'SickLeaveQequest',
            title: 'Sick leave request',
            translate: 'MENU.SickLeaveQequest',
            type: 'item',
            icon: 'circle',
            url: 'SickLeaveQequest'
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
]
