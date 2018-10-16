import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CitiesParams} from '../models/cities-params.model';
import {Country} from '../models/country.model';
import {FilteredSuppliersParams} from '../models/filtered-suppliers-params.model';
import {HotelMinPriceParams} from '../models/hotel-min-price-params.model';
import {HotelCategoriesParams} from '../models/hotel-categories-params.model';
import {StartNewParams} from '../models/start-new-params.model';
import {PageParams} from '../models/page-params.model';
import {MealTypesParams} from '../models/meal-types-params.model';
import {NewToursParams} from '../models/new-tours-params.model';
import {HotelInfo} from '../models/hotel.model';
import {NewToursResult} from '../models/new-tours-result.model';
import {SearchHotelsParams} from '../models/search-hotels-params.model';
import {StartParams} from '../models/start-params.model';
import {SOAPService} from './soap.service';
import {BookParams} from '../models/book-params.model';
import {UtilsService} from './utils.service';
import {Client} from 'ngx-soap';

@Injectable()
export class DsService {

  private url = 'https://2015.mag.travel/';
  private bearer: string;

  // dev
  private name = '623MagWidgetPrivateOffice6';
  private clientSecret = '6a963c39a450aba019056f1628ae1ccb';

  // prod
  // private name = '623WidgetLead4';
  // private clientSecret = '28c554d0f9c3781a8ff27fb09ba1310b';

  private tessCities = ['Саки'];

  constructor(private http: HttpClient,
              private soap: SOAPService,
              private utils: UtilsService) {
  }

  public getToken(): Promise<void> {
    const params = {
      grant_type: 'mag_oauth_grant',
      name: this.name,
      clientSecret: this.clientSecret
    };
    if (!this.bearer) {
      return this.http.post(this.url + 'tourclient/token', this.utils.stringify(params))
        .toPromise()
        .then((res: any) => {
          this.bearer = res.access_token;
        });
    } else {
      return Promise.resolve()
    }
  }

  public getCountries(): any {
    return this.http.get(this.url + 'tourclient/Dictionary/LoadCountries')
      .toPromise();
  }

  public getDepartureCities(): any {
    return this.http.get(this.url + 'tourclient/Dictionary/LoadDeparturesCities')
      .toPromise();
  }

  public getHotelCategories(params: HotelCategoriesParams): any {
    return this.http.get(this.url + 'tourclient/Dictionary/LoadHotelCategories?' + this.utils.stringify(params))
      .toPromise();
  }

  public getMealTypes(params: MealTypesParams): any {
    return this.http.get(this.url + 'tourclient/Dictionary/LoadMealTypes?' + this.utils.stringify(params))
      .toPromise();
  }

  public getFilteredSuppliers(params: FilteredSuppliersParams): any {
    return this.http.get(this.url + 'tourclient/Dictionary/GetFilteredSuppliers?' + this.utils.stringify(params))
      .toPromise();
  }

  public getCities(params: CitiesParams): any {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.post(this.url + 'tourclient/Dictionary/LoadCities', params, options)
      .toPromise();
  }

  public getTessCities(params: CitiesParams): Promise<any> {
    return this.getCities(params).then((res: any) => {
      const result: any = [];
      res.forEach((region: any) => {
        if (region.Cities) {
          region.Cities.forEach((city: any) => {
            if (this.tessCities.indexOf(city.Name) > -1) {
              result.push(city);
            }
          });
        }
      });
      return result;
    });
  }

  // public isCityAvailable(cityCode: string): boolean {
  //   const cities = this.getTessCities();
  //   let result = false;
  //   cities.forEach((city: any) => {
  //     if (city.Code === cityCode) {
  //       result = true;
  //     }
  //   });
  //   return result;
  // }

  public getHotelMinPrice(params: HotelMinPriceParams): any {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/search/HotelMinPrice?' + this.utils.stringify(params), {})
      .toPromise();
  }

  public page(params: PageParams): any {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/search/Page?' + this.utils.stringify(params), {})
      .toPromise();
  }

  public startNew(params: StartNewParams): any {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/search/StartNew?' + this.utils.stringify(params), {})
      .toPromise();
  }

  public searchHotels(params: SearchHotelsParams): any {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/Dictionary/SearchHotels?' + this.utils.stringify(params), {})
      .toPromise();
  }

  public newTours(params: NewToursParams): any {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/search/GetNewTours?' + this.utils.stringify(params), {})
      .toPromise();
  }

  public start(params: StartParams): any {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/search/Start?' + this.utils.stringify(params), {})
      .toPromise();
  }

  public book(params: BookParams): any {
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.bearer,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    };

    return this.http.post(this.url + 'tourclient/basket/book',
      'request=' + encodeURIComponent(JSON.stringify(params)),
      options)
      .toPromise();
  }

  public checkOrder(orderCode: string) {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/api/orderapi/GetOne?IsStrongSearchByCode=true&OrderCode=' +
      orderCode, options)
      .toPromise();
  }

  public getCitizenships() {
    return this.http.get(this.url + 'tourclient/Dictionary/LoadCitizenships')
      .toPromise();
  }

  public getHotelInfo(hotelId: string) {
    return this.http.get(this.url + 'tourclient/search/ViewHotelInfo?hotelID=' + hotelId)
      .toPromise();
  }

  public getManagersForAgreement(id: any) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.bearer,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    };

    return this.http.post(this.url + 'tourclient/Order/GetManagersForAgreement',
      'request=' + encodeURIComponent(JSON.stringify({ AgreementCode: id })),
      options)
      .toPromise();
  }

  public getBonus(clientId: string) {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/Bonus?clientId=' + clientId, options)
      .toPromise();
  }

  public getAgreementPayments(code: string) {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/order/GetAgreementPayments?AgreementCode=' + code, options)
      .toPromise();
  }

  public getHoldPayments(id: any) {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.post(this.url + 'tourclient/PaymentIntegration/HoldPayments',
      { AgreementCode: id},
      options)
      .toPromise();
  }

  public getVisaDocs(code: string) {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/visadocuments?agreementCode=' + code, options)
      .toPromise();
  }

  public getTouristServices(code: string) {
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.bearer })
    };
    return this.http.get(this.url + 'tourclient/order/TouristServices?agreementCode=' + code, options)
      .toPromise();
  }

  // xhr.open("GET", widget.host + "/tourclient/api/orderapi/GetFullAgreementData?AgreementCode=" + encodeURIComponent(obj.Code));
  // xhr.open("GET", widget.host + "/tourclient/api/orderapi/GetOne" + encodeURI(param));
  // xhr.open("POST", widget.host + "/tourclient/api/orderapi/PaymentSystemUrls?AgreementCode=" + encodeURIComponent(obj.Code));
  // xhr.open("POST", widget.host + "/tourclient/api/orderapi/PayKeeperSystemUrl");
  // xhr.open("POST", widget.host + "/tourclient/api/orderapi/PayTravelSystemUrl");

  private soapClient: any;
  public initSOAP() {
    return this.http.get('http://xml.mag.travel/reports/ServiceQ.asmx?WSDL',
      { responseType: 'text' })
      .toPromise()
      .then(response => {
        if (response) {
          this.soapClient = this.soap.createClient(response);
        }
        return this.soapClient;
      });
  }

  public quotaGetPlaces(date: string, day: number): any {
    const body = {
      sHdKey: 6443, // TESS
      sDateBeg: date,
      sNDays: day
    };

    return this.soapClient.operation('QuotaGetPlaces', body).then((operation: any) => {
      return this.http.post(operation.url, operation.xml,
        { headers: operation.headers, responseType: 'text' })
        .toPromise();
    });
  }

  public getAllActiveHotelOption(): any {
    return this.soapClient.operation('GetAllActiveHotelOption', {}).then((operation: any) => {
      return this.http
        .post(operation.url, operation.xml, { headers: operation.headers, responseType: 'text' })
        .toPromise()
        .then(res => {
          const result: any = [];
          const data = this.soapClient.parseResponseBody(res);
          data.Body.GetAllActiveHotelOptionResponse.GetAllActiveHotelOptionResult.Allspisok.Spisok.forEach((o: any) => {
            result.push({key: o.attributes.Key, name: o.attributes.Name});
          });
          return result;
        });
    });
  }

  public getAllActiveRegion(params: any): any {
    return this.soapClient.operation('GetAllActiveRegion', params).then((operation: any) => {
      return this.http.post(operation.url, operation.xml,
        { headers: operation.headers, responseType: 'text' })
        .toPromise()
        .then(res => {
          const result: any = [];
          const data = this.soapClient.parseResponseBody(res);
          data.Body.GetAllActiveRegionResponse.GetAllActiveRegionResult.Allspisok.Spisok.forEach((o: any) => {
            result.push({key: o.attributes.Key, code: o.attributes.Code, name: o.attributes.Name});
          });
          return result;
        });
    });
  }

  public getAllActiveHotel(params: any): any {
    return this.soapClient.operation('GetAllActiveHotel', params).then((operation: any) => {
      return this.http.post(operation.url, operation.xml,
        { headers: operation.headers, responseType: 'text' })
        .toPromise()
        .then(res => {
          const result: any = [];
          const data = this.soapClient.parseResponseBody(res);
          data.Body.GetAllActiveHotelResponse.GetAllActiveHotelResult.Allspisok.Spisok.forEach((o: any) => {
            result.push({key: o.attributes.Key, code: o.attributes.Code, name: o.attributes.Name});
          });
          return result;
        });
    });
  }
}
