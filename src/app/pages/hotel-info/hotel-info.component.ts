import {Component, Inject, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelInfo} from '../../models/hotel.model';
import {makeStateKey, Meta, Title, TransferState} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {DsService} from '../../services/ds.service';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {isPlatformBrowser} from '@angular/common';

const HOTEL_INFO_STATE = makeStateKey('hotel_info');
declare const ymaps: any;

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HotelInfoComponent {

  public hotelInfo: HotelInfo;
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  public yamap: any;
  public yamarker: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private meta: Meta,
              private ds: DsService,
              private http: HttpClient,
              private state: TransferState) {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [];
  }

  ngOnInit() {
    const hotelId = this.activatedRoute.snapshot.queryParams.id;
    if (!hotelId) {
      // TODO REDIRECT to List
    }

    this.title.setTitle('Отель');
    this.meta.updateTag({
      'description': 'Танжер'
    });
    this.hotelInfo = this.state.get(HOTEL_INFO_STATE, null);

    if (!this.hotelInfo) {
      this.ds.getHotelInfo(hotelId).then((hotelInfo: HotelInfo) => {
        this.hotelInfo = hotelInfo;
        this.state.set(HOTEL_INFO_STATE, hotelInfo);
        this.handleHotelInfo();
      });
    } else {
      this.handleHotelInfo();
    }
  }

  private handleHotelInfo() {
    this.hotelInfo.HotelData.ImageURLs = [];
    if (this.hotelInfo.HotelData.ImageURL) {
      const ids = this.hotelInfo.HotelData.ImageURL.split(',');
      ids.forEach((id: string) => {
        const imageUrl = 'http://2015.mag.travel/TourGateServices/' + id + '.file';
        this.hotelInfo.HotelData.ImageURLs.push(imageUrl);
        this.galleryImages.push({
          small: imageUrl,
          medium: imageUrl,
          big: imageUrl
        });
      });
    }
    if (isPlatformBrowser(this.platformId)) {
      if (this.hotelInfo.HotelData.Latitude && this.hotelInfo.HotelData.Longitude) {
        ymaps.ready(() => {
          this.yamap = new ymaps.Map('map', {
            center: [
              this.hotelInfo.HotelData.Latitude,
              this.hotelInfo.HotelData.Longitude
            ],
            zoom: 12
          });

          const marker = new ymaps.GeoObject({
            geometry: {
              type: 'Point',
              coordinates: [
                this.hotelInfo.HotelData.Latitude,
                this.hotelInfo.HotelData.Longitude
              ]
            },
            properties: {
              iconContent: this.hotelInfo.HotelData.Name,
              hintContent: this.hotelInfo.HotelData.Name
            }
          }, { preset: 'islands#blackStretchyIcon' });

          this.yamarker = marker;
          this.yamap.geoObjects.add(marker);
        });
      }
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.yamap.destroy();
    }
  }

}
