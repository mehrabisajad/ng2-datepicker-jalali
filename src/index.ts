import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersianI18n} from "./persian-I18n";
import {NgbCalendarPersian} from "./ngb-calendar-persian";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersianI18n,
    NgbCalendarPersian
  ],
  exports: [
    PersianI18n,
    NgbCalendarPersian
  ]
})
export class JalaliModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JalaliModule
    };
  }
}
