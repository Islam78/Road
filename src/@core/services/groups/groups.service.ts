import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private _http: HttpClient) { }
  getGroups() {
    return this._http.post(`${environment.apiUrl}/khayal_groups`, '', {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  addGroup(item){
    return this._http.post(`${environment.apiUrl}/khayal_post_group`, item, {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  getGroupsPermissions(item){    
    return this._http.post(`${environment.apiUrl}/khayal_permissions`, item, {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  editGroupPermissions(item){    
    return this._http.post(`${environment.apiUrl}/khayal_edit_group_permissions`, item, {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  addGroupPermissions(item){    
    return this._http.post(`${environment.apiUrl}/khayal_post_permission`, item, {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  // update permi khayal_edit_group_permissions send role [isselected only]
  // edit permition name 
  removeGroups(id) {
    return this._http.post(`${environment.apiUrl}/khayal_delete_group`, id, {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
}
