import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomBreakPointsProvider } from 'app/layout/custom-breakpoints';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  imports: [FlexLayoutModule.withConfig({ disableDefaultBps: true }), VerticalLayoutModule, HorizontalLayoutModule, NavbarModule],
  providers: [CustomBreakPointsProvider],
  exports: [VerticalLayoutModule, HorizontalLayoutModule]
})
export class LayoutModule {}
