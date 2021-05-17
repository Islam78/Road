import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { CoreCommonModule } from '@core/common.module'

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module'

import { SampleComponent } from './sample.component'
import { HomeComponent } from './home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { CommonModule } from '@angular/common'
import { NgSelectModule } from '@ng-select/ng-select'
import { CoreDirectivesModule } from '@core/directives/directives'
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module'

const routes = [
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'NewEmployee',
    component: AddEmployeeComponent
  }
]

@NgModule({
  declarations: [SampleComponent, HomeComponent, AddEmployeeComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    CoreCommonModule,
    CardSnippetModule,
    CoreDirectivesModule,
    NgSelectModule
  ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule { }
