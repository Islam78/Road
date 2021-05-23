import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ending-services',
  templateUrl: './ending-services.component.html',
  styleUrls: ['./ending-services.component.scss']
})
export class EndingServicesComponent implements OnInit {
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
            name: 'Ending Services',
            isLink: false
          }
        ]
      }
    }
  }

}
