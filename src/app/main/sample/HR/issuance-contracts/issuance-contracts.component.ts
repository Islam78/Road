import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-issuance-contracts',
  templateUrl: './issuance-contracts.component.html',
  styleUrls: ['./issuance-contracts.component.scss']
})
export class IssuanceContractsComponent implements OnInit {

  public contentHeader: object
  constructor() { }

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
    this.SearchHeader= 'Issuing Contract'
    this.SearchArr = [
      { label: "Office Name", Type: "text" },
      { label: "Employee Name", Type: "text" },
      { label: "Employee Id", Type: "number" },
    ]
  }

  editDisplayModal :boolean = false;
  ReviewDialog() {
    this.editDisplayModal =true
    setTimeout( () => {
      this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
    }, 100);
  }  
  horizontalWizardStepper: Stepper;
  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }
  horizontalWizardStepperNext(data) {
    this.horizontalWizardStepper.next();
    if (data.form.valid === true) {
      // this.horizontalWizardStepper.next();
    }
  }

}
