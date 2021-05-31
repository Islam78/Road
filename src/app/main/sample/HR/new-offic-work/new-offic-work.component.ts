import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offic-work',
  templateUrl: './new-offic-work.component.html',
  styleUrls: ['./new-offic-work.component.scss']
})
export class NewOfficWorkComponent implements OnInit {


  contentHeader: object
  ReviewDisplayModal: boolean
  NewDisplayModal :boolean
  constructor() { }

  showReviewModalDialog() {
    this.ReviewDisplayModal = true;
  }
  AddDisplayModal
  showAddModalDialog(){
    this.AddDisplayModal = true
  }
  DeleteModalDialog(){}
  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: '',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: '',
            isLink: true,
            link: '/'
          },
          {
            name: '',
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
      { label: "Office Name", Type: "text" },
    ]
  }

}
