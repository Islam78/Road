import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-ending-services',
  templateUrl: './ending-services.component.html',
  styleUrls: ['./ending-services.component.scss']
})
export class EndingServicesComponent implements OnInit {

  public contentHeader: object
  NewDisplayModal:boolean
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
            name: 'ending services',
            isLink: false
          }
        ]
      }
    }
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
