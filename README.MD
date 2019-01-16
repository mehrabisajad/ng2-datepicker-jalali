# ng2-datepicker-jalali

This Jalali library was added to the [Bootstrap library](https://ng-bootstrap.github.io/#/components/datepicker/calendars#jalali/). Please use it.

این کتابخانه جلالی به کتابخانه بوت استرپ اضافه شده است. لطفا از آن استفاده کنید.

datepicker jalali and datepicker persian

## Test

[http://mehrabisajad.ir/lib/ng2-datepicker-jalali/](http://mehrabisajad.ir/lib/ng2-datepicker-jalali/)

[https://github.com/mehrabisajad/ng2-datepicker-jalali-test](https://github.com/mehrabisajad/ng2-datepicker-jalali-test/)

## Installation

To install this library, run:

```bash
$ npm install ng2-datepicker-jalali --save
```

## Consuming

```bash
$ npm install ng2-datepicker-jalali
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import NgbModule library
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify NgbModule library as an import
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

edit css `styles.css`
```css
/*styles.css*/
@import '~bootstrap/dist/css/bootstrap.min.css';
```

Once NgbModule library is imported, you can use its components in your Angular application:

```xml
<!-- use ngb-datepicker component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngb-datepicker [firstDayOfWeek]="6"></ngb-datepicker>
```

And set providers in app.component.ts
```typescript
// app.component.ts
import {NgbDateStruct, NgbCalendar, NgbDatepickerI18n, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendarPersian} from "ng2-datepicker-jalali/persian/ngb-calendar-persian";
import {NgbDatepickerI18nPersian} from "ng2-datepicker-jalali/persian/ngb-datepicker-i18n-persian";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarPersian},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian}
  ]
})
export class AppComponent {
    ...
}
```
## License

MIT © [Sajad Mehrabi](mailto:info@mehrabisajad.ir)
