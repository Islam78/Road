import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOfficesRoutingModule } from './admin-offices-routing.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileUploadModule } from 'ng2-file-upload';
import { NewOfficWorkComponent } from './new-offic-work/new-offic-work.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewOfficWorkComponent
  ],
  imports: [
    CommonModule,
    AdminOfficesRoutingModule,
    ContentHeaderModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    FileUploadModule,
    SharedModule
  ]
})
export class AdminOfficesModule { }
