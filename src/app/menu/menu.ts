import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  // {
  //   id: 'sample',
  //   title: 'Sample',
  //   translate: 'MENU.SAMPLE',
  //   type: 'item',
  //   icon: 'file',
  //   url: 'sample'
  // },
  {
    id: 'addEmployee',
    title: 'Add Employee',
    translate: 'MENU.ADDEMPLOYEE',
    type: 'item',
    icon: 'user',
    url: 'NewEmployee'
  },
  {
    id: 'Employees',
    title: 'Employees',
    translate: 'MENU.EMPLOYEES',
    type: 'item',
    icon: 'credit-card',
    url: 'Employees'
  }
]
