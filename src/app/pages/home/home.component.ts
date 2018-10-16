import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CitiesParams} from '../../models/cities-params.model';
import {FilteredSuppliersParams} from '../../models/filtered-suppliers-params.model';
import {MealTypesParams} from '../../models/meal-types-params.model';
import {HotelCategoriesParams} from '../../models/hotel-categories-params.model';
import {StartNewParams} from '../../models/start-new-params.model';
import {NewToursParams} from '../../models/new-tours-params.model';
import {HotelMinPriceParams} from '../../models/hotel-min-price-params.model';
import {SearchHotelsParams} from '../../models/search-hotels-params.model';
import {StartParams} from '../../models/start-params.model';
import {PageParams} from '../../models/page-params.model';
import {Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CheckComponent} from '../../components/check-places/check.component';
import {Router} from '@angular/router';
import {UtilsService} from '../../services/utils.service';
import {HotelCardComponent} from '../../components/hotel-card/hotel-card.component';
import {DsService} from '../../services/ds.service';
import {isPlatformBrowser} from "@angular/common";

declare const ymaps: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    // public isLoading: boolean;

    // Все параметры формы
    public searchParams: any = {
        departFrom: 'Without_Flight',
        supplier: 'TSC',
        countryCode: 'RU',
        cityCodes: '',
        hotels: '',
        currency: 'RUR',
        tour: '',
        searchId: '',
        adults: 2,
        tourists: [],
        durations: 4,
        startDate: null,
        endDate: null
    };

    public toCities: any;
    public searchHotelsResult: any;
    public newToursResult: any;
    public hotelMinPriceResult: any;
    public tours: any[];
    public classes: any[];

    public yamap: any;
    public yamarkers: any = [];

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                private ds: DsService,
                private utils: UtilsService,
                private router: Router,
                private modal: NgbModal) {
        this.searchParams.startDate = this.utils.tomorrowAsObject();
        this.searchParams.endDate = this.utils.weekAsObject();
        //this.classes = this.ds.tessClasses;
        if (isPlatformBrowser(this.platformId)) {
            ymaps.ready(() => {
                this.yamap = new ymaps.Map('map', {
                    center: [44.717009, 34.372252],
                    zoom: 10
                });
            });
        }
    }

    ngOnInit() {
        // this.isLoading = true;
        if (isPlatformBrowser(this.platformId)) {
            this.ds.getToken().then((tokenResult: any) => {
                const getCitiesParams = {country: this.searchParams.countryCode};
                this.ds.getTessCities(getCitiesParams).then((res: any) => {
                    this.toCities = res;
                    if (this.toCities && this.toCities.length) {
                        this.searchParams.cityCodes = this.toCities[0].Code;
                        this.changeCity(null);
                    }
                });
            });
        }
    }

    public changeCity(city: any) {
      if (isPlatformBrowser(this.platformId)) {
        const searchHotelsParams = new SearchHotelsParams();
        searchHotelsParams.departFrom = this.searchParams.departFrom;
        searchHotelsParams.countryCode = this.searchParams.countryCode;
        searchHotelsParams.cityCodes = this.searchParams.cityCodes;
        searchHotelsParams.Suppliers = this.searchParams.supplier;
        searchHotelsParams.Page = 0;
        this.ds.searchHotels(searchHotelsParams).then((res: any) => {

          res.Result.forEach((hotel: any) => {
            // const marker = new ymaps.Placemark([hotel.Latitude, hotel.Longitude],
            //   { hintContent: hotel.Name, balloonContent: hotel.Name });

            const marker = new ymaps.GeoObject({
              // Описание геометрии.
              geometry: {
                type: 'Point',
                coordinates: [hotel.Latitude, hotel.Longitude]
              },
              // Свойства.
              properties: {
                // Контент метки.
                iconContent: hotel.Name,
                hintContent: hotel.Name
              }
            }, {
              preset: 'islands#blackStretchyIcon'
            });

            this.yamarkers.push(marker);
            this.yamap.geoObjects.add(marker);

            marker.events.add('click', (params: any) => {
              const modal = this.modal.open(HotelCardComponent, { size: 'lg' });
              modal.result.then(() => {

              });
            });
          });

          this.searchHotelsResult = res.Result;
          if (this.searchHotelsResult && this.searchHotelsResult.length) {
            this.searchParams.hotels = this.searchHotelsResult[0].Code;
            this.changeHotel(null);
          }
        });
      }
    }

    public changeHotel(hotel: any) {

    }

    public removeCity() {
      if (isPlatformBrowser(this.platformId)) {
        this.yamarkers.forEach((marker: any) => {
          this.yamap.geoObjects.remove(marker);
        });
      }
    }

    public startSearch() {
        this.router.navigate(['./booking']);
        // TODO Add parameters
    }

    ngOnDestroy() {
      if (isPlatformBrowser(this.platformId)) {
        this.yamap.destroy();
      }
    }

}
