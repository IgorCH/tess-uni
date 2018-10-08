import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UtilsService} from '../../services/utils.service';
import {DsService} from '../../services/ds.service';

declare const MagWidgetPrivateOffice: any;

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CabinetComponent {

  public orderCode: string;
  public order: any;

  constructor(private ds: DsService,
              private utils: UtilsService) {
  }

  public checkOrder () {
    this.ds.getToken().then((tokenResult: any) => {
      this.ds.checkOrder(this.orderCode).then((res: any) => {
        // if (res.re)
        this.order = res.Item;
      });
    });
  }
}
