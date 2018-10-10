// Import Angular modules
import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, ElementRef } from '@angular/core';
import { I18n } from '../../services/interfaces.service';

// Import npm modules
import range from 'lodash-es/range';
import times from 'lodash-es/times';
import * as moment_ from 'moment';

const moment = moment_;


/*
* @Component: ConichiDatepickerComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Datepicker.
*/

@Component({
  selector: 'conichi-datepicker',
  templateUrl: './datepicker.html'
})

export class ConichiDatepickerComponent implements AfterViewChecked {
  public openDatepicker: boolean;
  public dateInput: any;
  public month: string;
  public year: number;
  public day: string;
  public hour: string;
  public minute: string;
  public daysArray: Array<any>;
  public hoursArray: Array<any>;
  public minutesArray: Array<any>;
  public yearOptions: Array<Object>;
  public monthStartOffset: number;
  public displayTime: boolean;
  public monthsOptions = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
  ];

  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() model: string;
  @Input() years: string;
  @Input() time: boolean;
  @Input() offset: number;
  @Input() i18n: I18n;

  constructor(private cdr: ChangeDetectorRef, private elem: ElementRef) {
    elem.nativeElement.onkeyup = (elem) => {
      elem.preventDefault();
      this.openDatepicker = true;
    };

    this.setTimeOptions();
  }

  ngAfterViewChecked() {
    if (this.model) {
      this.model = (this.model.includes('Z')) ? this.model : `${ moment(this.model).local().format('YYYY-MM-DDTHH:mm:ss.SSS') }Z`;

      if (this.time)
        this.dateInput = moment(this.model).utc().format('Do, MMM YYYY - HH:mm');
      else
        this.dateInput = moment(this.model).utc().format('Do, MMM YYYY');
    }

    if (!this.offset) { this.offset = 0; }

    this.getYearOptions();
    this.getMonth();

    this.cdr.detectChanges();
  }

  setTimeOptions() {
    const hoursArray = [];
    const minutesArray = [];

    times(24, function(index) {
      hoursArray.push({
        label: ('0' + index).slice(-2),
        value: ('0' + index).slice(-2)
      });
    });

    times(60, function(index) {
      minutesArray.push({
        label: ('0' + index).slice(-2),
        value: ('0' + index).slice(-2)
      });
    });

    this.hoursArray = hoursArray;
    this.minutesArray = minutesArray;
  }

  getYearOptions() {
    const thisYear = new Date().getFullYear();

    const yearRange = (this.years === 'future')
    ? range(thisYear + this.offset, thisYear + 100) : range(thisYear - this.offset, thisYear - 100);

    const yearOptions = [];

    yearRange.forEach((year) => yearOptions.push({ label: year, value: year }));
    this.yearOptions = yearOptions;
  }

  getMonth() {
    const monthMap = {
      'January': '01',
      'February': '02',
      'March': '03',
      'April': '04',
      'May': '05',
      'June': '06',
      'July': '07',
      'August': '08',
      'September': '09',
      'October': '10',
      'November': '11',
      'December': '12'
    };

    this.month = (this.month) ? this.month : moment().format('MMMM');
    
    if (typeof this.offset === 'string') this.offset = parseInt(this.offset, 10);

    if (!this.year) {
      this.year = parseInt(moment().format('YYYY'), 10);

      if (this.offset && this.years === 'future') this.year += this.offset;
      else if (this.offset) this.year -= this.offset;
    }


    const chosenMonth = (this.month) ? monthMap[this.month] : moment().format('MM');
    const chosenYear = (this.year) ? this.year : moment().format('YYYY');

    const daysInMonth = moment(`${ chosenYear }-${ chosenMonth }`, 'YYYY-MM').daysInMonth();

    this.monthStartOffset = range(1, moment(`${ chosenYear }-${ chosenMonth }-01`, 'YYYY-MM-DD').weekday() + 1);

    this.daysArray = range(1, daysInMonth + 1);
  }

  checkTime() {
    if (this.hour && this.minute) this.submitDate(null, true);
  }

  submitDate(day, isTimeSet) {
    if (day) this.day = day;

    if (this.time && !isTimeSet) this.displayTime = true;
    else {
      const monthMap = {
        'January': '01',
        'February': '02',
        'March': '03',
        'April': '04',
        'May': '05',
        'June': '06',
        'July': '07',
        'August': '08',
        'September': '09',
        'October': '10',
        'November': '11',
        'December': '12'
      };

      const month = monthMap[this.month];

      if (this.day.toString().length === 1) this.day = `0${ this.day }`;

      this.model = moment(`${ this.year }-${ month }-${ this.day }T${ this.hour || '00' }:${ this.minute || '00' }:00.000 Z`).toISOString();

      if (this.time)
        this.dateInput = moment(this.model).utc().format('Do, MMM YYYY - HH:mm');
      else
        this.dateInput = moment(this.model).utc().format('Do, MMM YYYY');

      this.openDatepicker = false;
      this.modelChange.emit(this.model);
    }
  }
}
