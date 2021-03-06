import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-recommend-employee',
  templateUrl: './recommend-employee.component.html',
  styleUrls: ['./recommend-employee.component.scss']
})
export class RecommendEmployeeComponent implements OnInit {

  contentHeader: object
  editDisplayModal: boolean
  constructor() { }

  showEditModalDialog() {
    this.editDisplayModal = true;
    setTimeout(() => {
      this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
    }, 100);

  }
  UpdateEmployeeOffices() {
    this.editDisplayModal = false
  }
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
    this.SearchHeader= 'Recommend Employee'
    this.SearchArr = [
      { label: "empolyeee name", Type: "text" },
      { label: "office name ", Type: "text" },
    ]
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
