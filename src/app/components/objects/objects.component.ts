import {Component, OnDestroy, OnInit} from '@angular/core';
import {DsService} from '../../services/ds.service';
import {Objects} from "../../data/objects.const";

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html'
})
export class ObjectsComponent implements OnInit, OnDestroy {

  public objects: any;

  constructor() {
    this.objects = Object.assign([], Objects);
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
