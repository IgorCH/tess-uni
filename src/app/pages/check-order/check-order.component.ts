import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderInfo} from '../../models/order.model';
import {DsService} from '../../services/ds.service';

@Component({
  selector: 'app-check-order',
  templateUrl: './check-order.component.html',
  styleUrls: ['./check-order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckOrderComponent {

  public order: string;
  public orderInfo: OrderInfo;

  constructor(private activatedRoute: ActivatedRoute,
              private ds: DsService) {
  }

  ngOnInit() {
    this.order = this.activatedRoute.snapshot.queryParams.order;
    if (!this.order) {
      this.order = '000085';
    }
    if (this.order) {
      this.checkOrder();
    }
  }

  ngOnDestroy() {

  }

  public checkOrder() {
    this.ds.getToken().then(() => {
      this.ds.checkOrder(this.order).then((order: any) => {
        this.orderInfo = order.Item;
      });

      this.ds.getTouristServices(this.order).then((tourists: any) => {
        this.ds.getBonus(tourists.Clients[0].ID).then((bonus: any) => {

        });
      });

      this.ds.getManagersForAgreement(this.order).then((managers: any) => {

      });

      this.ds.getAgreementPayments(this.order).then((payments: any) => {

      });

      this.ds.getHoldPayments(this.order).then((hold: any) => {

      });

      this.ds.getVisaDocs(this.order).then((docs: any) => {

      });

    });
  }
}
