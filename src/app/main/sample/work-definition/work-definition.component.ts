import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-definition',
  templateUrl: './work-definition.component.html',
  styleUrls: ['./work-definition.component.scss']
})
export class WorkDefinitionComponent implements OnInit {

  public contentHeader: object
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Hr',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Contract',
            isLink: true,
            link: '/'
          },
          {
            name: 'work definition',
            isLink: false
          }
        ]
      }
    }
  }
}
