import {Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DsService} from '../../services/ds.service';
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
import { Observable, of } from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CheckComponent} from '../../components/check-places/check.component';
import {Place} from '../../models/place.model';
import {UtilsService} from '../../services/utils.service';
import {BookParams} from '../../models/book-params.model';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookingComponent implements OnInit {

  public step = 'step0';

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
    adults: 1,
    tourists: [],
    durations: 7,
    startDate: null,
    endDate: null
  };

  public toCities: any;
  public searchHotelsResult: any;
  public newToursResult: any;
  public hotelMinPriceResult: any;
  public tours: any[];
  public classes: any[];
  public hotel: any;
  public loading: boolean;
  public citizenships: any[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private ds: DsService,
              private san: DomSanitizer,
              private utils: UtilsService,
              private http: HttpClient,
              private modal: NgbModal) {
    this.searchParams.startDate = this.utils.tomorrowAsObject();
    this.searchParams.endDate = this.utils.weekAsObject();
  }

  ngOnInit() {
    this.ds.getCitizenships().then((cits: any[]) => {
      this.citizenships = cits || [];
    });
    if (isPlatformBrowser(this.platformId)) {
      Promise.all([this.ds.initSOAP(), this.ds.getToken()]).then((values: any) => {
        this.ds.getAllActiveHotelOption().then((res: any) => {
          this.classes = res;
          this.searchParams.classes = [];
          this.changeClass();
        });
      });
    }

  }

  public changeClass() {
    const params = {
      sHotelOption: this.searchParams.classes
    };
    this.ds.getAllActiveRegion(params).then((res: any) => {
      this.toCities = res || [];
      if (this.toCities.length) {
        this.searchParams.cityCodes = this.toCities[0];
      } else {
        this.searchParams.cityCodes = null;
      }
      this.changeCity();
    });
  }

  public changeCity() {
    const params = {
      // sCnKey: 460 Россия
      sHotelOption: this.searchParams.classes,
      sHotelRegion: this.searchParams.cityCodes.key
    };
    this.ds.getAllActiveHotel(params).then((res: any) => {
      this.searchHotelsResult = res || [];
      if (this.searchHotelsResult.length) {
        this.searchParams.hotels = this.searchHotelsResult[0];
      } else {
        this.searchParams.hotels = null;
      }
      this.changeHotel();
    });
  }

  public changeHotel() {
    this.ds.getHotelInfo().then((hotel: any) => {
      this.hotel = hotel.HotelData;
    });
  }

  public selectTour(tour: any) {
    this.searchParams.tour = tour.Tour.ID;
    this.step = 'step3';
  }

  private getNewTours() {
    const newToursParams = new NewToursParams();
    newToursParams.searchId = this.searchParams.searchId;
    newToursParams.itemsCountOnPage = 3000;

    const hotelMinPriceParams = new HotelMinPriceParams();
    hotelMinPriceParams.searchId = this.searchParams.searchId;
    hotelMinPriceParams.itemsCountOnPage = 3000;
    hotelMinPriceParams.pageNumber = 0;

    this.ds.newTours(newToursParams).then((toursRes: any) => {
      if (toursRes.OffersCount > 0) {
        this.newToursResult = this.newToursResult.concat(toursRes.SupplierResponsesSearchState);
        this.ds.getHotelMinPrice(hotelMinPriceParams).then((hotelsRes: any) => {
          this.hotelMinPriceResult = hotelsRes.Results;
          this.step = 'step1';
          // this.buy();
        });
      }
      if (toursRes.InProcess) {
        setTimeout(() => {
          this.getNewTours();
        }, 2000);
      }
    });
  }

  public startSearch() {
    this.loading = true;
    const startNewParams: StartNewParams = new StartNewParams();
    startNewParams.departFrom = this.searchParams.departFrom;
    startNewParams.countryCode = this.searchParams.countryCode;
    startNewParams.adults = this.searchParams.adults;
    startNewParams.startDate = this.utils.dateToStr(this.searchParams.startDate);
    if (this.searchParams.endDate) {
      startNewParams.endDate = this.utils.dateToStr(this.searchParams.endDate);
    }
    startNewParams.cityCodes = this.searchParams.cityCodes.code;
    startNewParams.durations = this.searchParams.durations;
    startNewParams.Currency = this.searchParams.currency;
    startNewParams.Hotels = this.searchParams.hotels.code;
    startNewParams.Suppliers = this.searchParams.supplier;
    startNewParams.PriceMin = '';
    startNewParams.PriceMax = '';
    startNewParams.PageSize = 3000;

    const searchHotelsParams = new SearchHotelsParams();
    searchHotelsParams.departFrom = 'Without_Flight';
    searchHotelsParams.Suppliers = this.searchParams.supplier;
    searchHotelsParams.countryCode = this.searchParams.countryCode;
    searchHotelsParams.cityCodes = this.searchParams.cityCodes.code;
    searchHotelsParams.Page = 0;

    Promise.all([this.ds.startNew(startNewParams),
                 this.ds.searchHotels(searchHotelsParams)]).then((values) => {
    // this.ds.startNew(startNewParams).then((res: any) => {
      const res = values[0];
      this.searchParams.searchId = res.SearchId;
      if (!this.searchParams.searchId) {
        alert(res.ResultQueryInfo.UserMessages);
      } else {
        this.newToursResult = [];
        this.getNewTours();
      }
    });
  }

  public buy() {
    this.loading = true;
    const startParams: StartParams = new StartParams();
    startParams.departFrom = 'Without_Flight';
    startParams.countryCode = this.searchParams.countryCode;
    startParams.adults = this.searchParams.adults;
    startParams.startDate = this.utils.dateToStr(this.searchParams.endDate);
    startParams.endDate = this.utils.dateToStr(this.searchParams.endDate);
    startParams.cityCodes = this.searchParams.cityCodes.code;
    startParams.durations = this.searchParams.durations;

    // startParams.PriceMin = '';
    // startParams.PriceMax = '';
    startParams.Hotels = this.searchParams.hotels.code;
    startParams.Suppliers = this.searchParams.supplier;
    startParams.Currency = this.searchParams.currency;

    this.ds.start(startParams).then((res: any) => {
      const newToursParams = new NewToursParams();
      newToursParams.searchId = res;
      this.searchParams.searchId = res;
      newToursParams.itemsCountOnPage = 3000;
      this.ds.newTours(newToursParams).then((newToursResult: any) => {
        // tour.items = newToursResult;
      });
      const pageParams: PageParams = new PageParams();
      pageParams.searchId = res;
      pageParams.itemsCountOnPage = 5000;
      pageParams.GetAllResults = true;
      this.ds.page(pageParams).then((pageResult: any) => {
        this.step = 'step2';
        this.tours = pageResult.Results;
        this.searchParams.tourists = [];
        for (let i = 0; i < this.searchParams.adults; i++) {
          this.searchParams.tourists.push({
            "AgeCategory": "ADULT",
            "FirstName": "Николай",
            "LastName": "Ангелюк",
            "MiddleName": "",
            "Gender": 0,
            "Citizenship": "RU_43",
            "DateOfBirth": {
              "Format": "dd.MM.yyyy",
              "Serialized": "18.10.1991"
            },
            "DocumentDateOfIssuance": {
              "Format": "dd.MM.yyyy",
              "Serialized": "11.11.2011"
            },
            "DocumentValidDate": {
              "Format": "dd.MM.yyyy",
              "Serialized": "02.02.2020"
            },
            "DocumentNumber": "125678945",
            "TypeOfDocument": "FOREIGN_PASSPORT",
            "ContactTelephoneNumber": "",
            "LastNameLat": "Angelyuk",
            "FirstNameLat": "Nikolay",
            "Id": 3336


            // AgeCategory: 'ADULT',
            // FirstName: '',
            // LastName: '',
            // MiddleName: '',
            // Gender: 0,
            // Citizenship: 'RU_43',
            // DateOfBirth: {'Format': 'dd.MM.yyyy', 'Serialized': '10.10.2000'},
            // DocumentDateOfIssuance: {'Format': 'dd.MM.yyyy', 'Serialized': '10.10.2010'},
            // DocumentValidDate: {'Format': 'dd.MM.yyyy', 'Serialized': ''},
            // DocumentNumber: '',
            // TypeOfDocument: 'PASSPORT',
            // ContactTelephoneNumber: '',
            // LastNameLat: 'ZOLOTUKHINA',
            // FirstNameLat: 'NATALIA'
          });
        }
      });
    });
  }

  public book() {
    const params: BookParams = new BookParams();

    params.responseID = this.searchParams.searchId;
    params.selectedTourID = this.searchParams.tour;
    params.tourists = this.searchParams.tourists;

    this.ds.book(params).then((res: any) => {
      if (res.ResultQueryInfo.HasError) {
        return alert(res.ResultQueryInfo.UserMessages);
      }
    });
  }

  public checkPlaces() {
    const modal = this.modal.open(CheckComponent, {size: 'lg'});
    modal.result
      .then((res: any) => {})
      .catch((res: any) => {});
  }


}
