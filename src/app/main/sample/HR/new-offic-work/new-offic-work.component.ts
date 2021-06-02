import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offic-work',
  templateUrl: './new-offic-work.component.html',
  styleUrls: ['./new-offic-work.component.scss']
})
export class NewOfficWorkComponent implements OnInit {


  contentHeader: object
  ReviewDisplayModal: boolean
  NewDisplayModal: boolean
  constructor() { }

  ShowData: boolean
  showReviewModalDialog(event) {
    this.ReviewDisplayModal = true;
    if (event == 'Show') {
      this.ShowData = true
      return
    }
    this.ShowData = false
  }
  DeleteModalDialog() { }
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
    this.SearchHeader = 'Offic Work'
    this.SearchArr = [
      { label: "Office Name", Type: "text" },
    ]
  }

}
