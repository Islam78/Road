import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offic-work',
  templateUrl: './new-offic-work.component.html',
  styleUrls: ['./new-offic-work.component.scss']
})
export class NewOfficWorkComponent implements OnInit {
  constructor() { }

  DeleteModalDialog() { }
  ngOnInit(): void { }
  ReviewDisplayModal: boolean
  ShowData: boolean
  showReviewModalDialog(event) {
    this.ReviewDisplayModal = true;
    if (event == 'Show') {
      this.ShowData = true
      return
    }
    this.ShowData = false
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
