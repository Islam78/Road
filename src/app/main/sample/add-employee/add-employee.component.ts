import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {


  // public
  public contentHeader: object;
  public TDNameVar;
  public TDEmailVar;
  public TDFirstNameVar;
  public TDLastNameVar;
  public twitterVar;
  public facebookVar;
  public googleVar;
  public linkedinVar;
  public landmarkVar;
  public addressVar;
  public TDPhoneVar;
  public TDNationalityVar;
  public TDTypeVar;
  public TDDateOfBirthVar;
  public TDAgeVar;
  public TDVisaprofessionVar;
  public TDActualprofessionVar;
  public TDEmployeeTypeVar
  TDSalaryVar
  TDSubsistenceVar
  TDHousingAllowanceVar
  TDRelocationAllowanceVar
  TDTotalSalaryVar
  public selectBasic = [
    { name: 'UK' },
    { name: 'USA' },
    { name: 'Spain' },
    { name: 'France' },
    { name: 'Italy' },
    { name: 'Australia' }
  ];
  private horizontalWizardStepper: Stepper;

  public selectMulti = [{ name: 'English' }, { name: 'French' }, { name: 'Spanish' }];
  public selectMultiSelected;

  // private
  private verticalWizardStepper: Stepper;
  private modernWizardStepper: Stepper;
  private modernVerticalWizardStepper: Stepper;
  private bsStepper;

  /**
   * Horizontal Wizard Stepper Next
   *
   * @param data
   */
  horizontalWizardStepperNext(data) {
    if (data.form.valid === true) {
      this.horizontalWizardStepper.next();
    }
  }
  /**
   * Horizontal Wizard Stepper Previous
   */
  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }

  /**
   * Vertical Wizard Stepper Next
   */
  verticalWizardNext() {
    this.verticalWizardStepper.next();
  }
  /**
   * Vertical Wizard Stepper Previous
   */
  verticalWizardPrevious() {
    this.verticalWizardStepper.previous();
  }
  /**
   * Modern Horizontal Wizard Stepper Next
   */
  modernHorizontalNext() {
    this.modernWizardStepper.next();
  }
  /**
   * Modern Horizontal Wizard Stepper Previous
   */
  modernHorizontalPrevious() {
    this.modernWizardStepper.previous();
  }
  /**
   * Modern Vertical Wizard Stepper Next
   */
  modernVerticalNext() {
    this.modernVerticalWizardStepper.next();
  }
  /**
   * Modern Vertical Wizard Stepper Previous
   */
  modernVerticalPrevious() {
    this.modernVerticalWizardStepper.previous();
  }

  /**
   * On Submit
   */
  onSubmit() {
    return false;
  }

  constructor() { }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */
  ngOnInit() {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});

    this.verticalWizardStepper = new Stepper(document.querySelector('#stepper2'), {
      linear: false,
      animation: true
    });

    this.modernWizardStepper = new Stepper(document.querySelector('#stepper3'), {
      linear: false,
      animation: true
    });

    this.modernVerticalWizardStepper = new Stepper(document.querySelector('#stepper4'), {
      linear: false,
      animation: true
    });

    this.bsStepper = document.querySelectorAll('.bs-stepper');

    // content header
    this.contentHeader = {
      headerTitle: 'Form Wizard',
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
            name: 'Forms',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Wizard',
            isLink: false
          }
        ]
      }
    };
  }
}
