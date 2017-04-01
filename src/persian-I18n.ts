/**
 * Created by mehrabisajad on 2017/03/28.
 */
import {Injectable} from '@angular/core';
import {NgbDatepickerI18n} from "@ng-bootstrap/ng-bootstrap";

/**
 * Transforms any input value
 */
const WEEKDAYS_SHORT = ['د', 'س', 'چ', 'پ', 'ج', 'ش', 'ی'];
const MONTHS_SHORT = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند',];
const MONTHS_FULL = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند',];

@Injectable()
export class PersianI18n extends NgbDatepickerI18n {
    getWeekdayShortName(weekday: number) {
        return WEEKDAYS_SHORT[weekday - 1];
    }

    getMonthShortName(month: number) {
        return MONTHS_SHORT[month - 1];
    }

    getMonthFullName(month: number) {
        return MONTHS_FULL[month - 1];
    }
}
