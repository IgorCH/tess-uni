import {Component, OnDestroy, OnInit} from '@angular/core';
import {DsService} from '../../services/ds.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html'
})
export class HotelCardComponent implements OnInit, OnDestroy {

  constructor(private ds: DsService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
