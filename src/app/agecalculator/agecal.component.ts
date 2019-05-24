import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
// import { ToastsManager } from 'ng2-toastr';
import { AgecalService } from './agecal.service';
import { TranslateService } from 'ng2-translate';
import * as _moment from 'moment';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';

const moment = (_moment as any).default ? (_moment as any).default : _moment;
export const MY_CUSTOM_FORMATS = {
  parseInput: 'LL LT',
  fullPickerInput: 'LL LT',
  datePickerInput: 'LL',
  timePickerInput: 'LT',
  monthYearLabel: 'YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'YYYY',
};
@Component({
  selector: 'app-agecal-root',
  templateUrl: './agecal.component.html',
  providers: [{ provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },

  { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }]
})
export class AgeCalComponent implements OnInit {
  bDateTime: Date;
  asOnDateTime: Date;
  age: string;
  ageRes: any = false;
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.clear();
  }
  calculate() {
    const bDay = moment(this.bDateTime).format('YYYY-MM-DD HH:mm:ss');
    const asOnDay = moment(this.asOnDateTime).format('YYYY-MM-DD HH:mm:ss');
    let seconds = moment(asOnDay).diff(bDay, 'seconds');
    const years = Math.floor(seconds / (365.25 * 24 * 60 * 60));
    seconds -= years * (365.25 * 24 * 60 * 60);
    const months = Math.floor(seconds / (43800 * 60));
    seconds -= months * (43800 * 60);
    const days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    let yearsStr = years + ' years ';
    if (years === 0) {
      yearsStr = '';
    } else if (years > 0 && years <= 1) {
      yearsStr = years + ' year ';
    }
    let monthsStr = months + ' months ';
    if (months === 0) {
      monthsStr = '';
    } else if (months > 0 && months <= 1) {
      monthsStr = months + ' month ';
    }
    let dayStr = days + ' days ';
    if (days === 0) {
      dayStr = '';
    } else if (days > 0 && days <= 1) {
      dayStr = days + ' day ';
    }
    let hrStr = hours + ' hours ';
    if (hours === 0) {
      hrStr = '';
    } else if (hours > 0 && hours <= 1) {
      hrStr = hours + ' hour ';
    }
    let mntsStr = minutes + ' minutes ';
    if (minutes === 0) {
      mntsStr = '';
    } else if (minutes > 0 && minutes <= 1) {
      mntsStr = minutes + ' minute ';
    }
    this.ageRes = true;
    this.age = yearsStr + monthsStr + dayStr + hrStr + mntsStr;
  }
  clear() {
    this.age = '';
  }
}
