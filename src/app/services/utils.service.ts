import {Injectable} from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() {
  }

  public stringify(params: any): string {
    let str = '';
    for (const paramName in params) {
      if (Object.prototype.toString.call(params[paramName]) === '[object Array]') {
        params[paramName].forEach(function (val: any, index: number) {
          str += (str.length ? '&' : '') + paramName + '=' + encodeURIComponent(val);
        });
      } else {
        str += (str.length ? '&' : '') + paramName + '=' + encodeURIComponent(params[paramName]);
      }
    }
    return str;
  }

  public dateToStr(date: any) {
    return date.year + '.' + date.month + '.' + date.day;
  }

  public todayAsObject() {
    const date = new Date();
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  public tomorrowAsObject() {
    const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  public weekAsObject() {
    const date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
}
