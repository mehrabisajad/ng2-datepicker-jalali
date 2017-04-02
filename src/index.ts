import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbDatepickerI18nPersian} from "./ngb-datepicker-i18n-persian";
import {NgbCalendarPersian} from "./ngb-calendar-persian";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgbDatepickerI18nPersian,
    NgbCalendarPersian
  ],
  exports: [
    NgbDatepickerI18nPersian,
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
