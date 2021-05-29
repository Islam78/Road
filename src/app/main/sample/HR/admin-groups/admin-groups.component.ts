import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@core/services/groups/groups.service';
import { CoreTranslationService } from '@core/services/translation.service';
import { Groups } from 'app/auth/models/Groups';
import { GroupsPermissions } from 'app/auth/models/GroupsPermissions';
import { MessageService } from 'primeng/api';
import { locale as en } from './../../i18n/en'
import { locale as ar } from './../../i18n/ar'
@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss']
})
export class AdminGroupsComponent implements OnInit {

  contentHeader: object
  groups: Groups[];
  loading: boolean = true;
  constructor(
    private _serv: GroupsService,
    private messageService: MessageService,
    private _coreTranslationService: CoreTranslationService
  ) {
    this._coreTranslationService.translate(en, ar)
  }

  ngOnInit(): void {
    this.getGroups()
    this.Header()
  }
  getGroups() {
    this._serv.getGroups().subscribe((res: any) => {
      this.groups = res.data
      this.loading = false;
    })
  }

  addDisplayModal: boolean;
  editDisplayModal: boolean
  showAddModalDialog() {
    this.addDisplayModal = true;
  }
  showEditModalDialog() {
    this.editDisplayModal = true;
  }

  add(i) {
    // console.log(i.value);
    this._serv.addGroup({ "group_name": i.value }).subscribe(
      (res: any) => {
        if (res.status === true) {
          this.messageService.add({ severity: "info", summary: "Confirmed", detail: "You have accepted" });
          this.getGroups();
        }
      }
    )
    this.addDisplayModal = false
  }
  GroupsPermissions: GroupsPermissions[] = []
  SelectedGroupsPermissions
  OpenEdit(item) {
    this.SelectedGroupsPermissions = item
    this._serv.getGroupsPermissions({ group_id: item.id }).subscribe((res: any) => {
      if (res.status === true) {
        this.showEditModalDialog();
        this.GroupsPermissions = res.data;
        this.GroupsPermissions.map(res => res.edit = false);
      }
    })
  }
  AddGroupPermision() {
    let item: any = {
      action: "",
      edit: true,
      id: this.GroupsPermissions.length,
      permission_name: "",
      selected: true,
      add: true
    }
    this.GroupsPermissions.unshift(item)
  }
  SaveNewPerm(item) {
    if (item.permission_name) item.edit = false
    if (item.add = true) {
      // console.log('add');
      item.action = "s"
      this._serv.addGroupPermissions(item).subscribe(res => { item.add = false })
    } else {
      // console.log('edit');
      this._serv.editGroupPermissions(item).subscribe()
    }
  }
  DeleteNewPerm(item) {
    if (item.add = true) {
      this.GroupsPermissions.shift()
      item.edit = false;
      return
    }
    item.edit = false;
  }
  UpdateGroupPermisions() {
    let GetItems = this.GroupsPermissions.filter((date: any) => date.selected == true),
      idOfItems = [...GetItems.map(res => res.id)],
      role = { group_id: this.SelectedGroupsPermissions.id, roles: idOfItems }
    this._serv.editGroupPermissions(role).subscribe(fun => this.editDisplayModal = false)
  }
  remove(item: Groups) {
    // console.log(item);
    this._serv.removeGroups({ "id": item.id }).subscribe((res: any) => {
      if (res.status === true) {
        this.getGroups();
      }
    })
  }
  Header() {
    this.contentHeader = {
      headerTitle: 'Admin Groups',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Groups',
            isLink: false
          }
        ]
      }
    }
  }

  SearchArr
  SearchHeader
  MakeSearchArr() {
    this.SearchHeader= 'Admin Group'
    this.SearchArr = [
      { label: "Admin Name", Type: "text" },
      { label: "Code", Type: "text" },
    ]
  }
}
