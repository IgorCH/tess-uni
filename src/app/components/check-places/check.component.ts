import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SOAPService} from '../../services/soap.service';
import {Place} from '../../models/place.model';
import {HttpClient} from '@angular/common/http';
import {DsService} from '../../services/ds.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  public monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  public days: any;
  public year: number = 2018;
  public month: number = 8;
  public hotelPlaces: any = [];

  constructor(private activeModal: NgbActiveModal,
              private ds: DsService,
              private http: HttpClient,
              private soap: SOAPService) {
    this.days = [];
    for (let i = 1; i < 31; i++) {
      this.days.push(i);
    }
  }

  ngOnInit() {
    this.checkPlaces();
  }

  private handlePlaces(data: Place[], dateStr: string): any {
    const result: any = [];
    const rooms: any = [];

    data.forEach((place: any) => {
      if (rooms.indexOf(place.attributes.Name) === -1) {
        rooms.push(place.attributes.Name);
      }
    });
    rooms.forEach((room: any) => {
      const hotelPlace: any = {
        name: room,
        places: []
      };
      data.forEach((place: any) => {
        if (place.attributes.Name === room) {
          hotelPlace.places.push(place);
        }
      });
      result.push(hotelPlace);
    });

    return result;
  }

  public checkPlaces() {
    this.http.get('http://xml.mag.travel/reports/ServiceQ.asmx?WSDL',
      { responseType: 'text' }).subscribe(response => {
      if (response) {
        const client = this.soap.createClient(response);
        const body = {
          sHdKey: 6443,
          sDateBeg: this.year + '.' + this.month + '.01',
          sNDays: 30
        };

        client.operation('QuotaGetPlaces', body)
          .then((operation: any) => {
            this.http.post(operation.url, operation.xml,
              { headers: operation.headers, responseType: 'text' })
              .toPromise()
              .then((res) => {
                const data = client.parseResponseBody(res);
                const item = data.Body.QuotaGetPlacesResponse.QuotaGetPlacesResult.SpoDataTables.SpoDataTable[0];
                if (item.Info === 'Ok') {
                  this.hotelPlaces = this.handlePlaces(item.allhdplacestable.hotelplaces, body.sDateBeg);
                }
              });
          })
          .catch((err: any) => console.log('Error', err));
      }
    });
  }

  public nextMonth() {
    this.month++;
    if (this.month === 13) {
      this.year++;
      this.month = 1;
    }
    this.checkPlaces();
  }

  public prevMonth() {
    this.month--;
    if (this.month === 0) {
      this.year--;
      this.month = 12;
    }
    this.checkPlaces();
  }

  public close() {
    this.activeModal.close();
  }
}
