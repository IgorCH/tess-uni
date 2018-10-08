export class StartNewParams {
  public departFrom: string; // 'MOW',
  public countryCode: string; // 'RU',
  public adults: number; // 2,
  public startDate: string; // '2018.06.10',
  public endDate: string; // '2018.06.15',
  public cityCodes: string; // '6aabf196-38fd-4bf3-b643-f18958fc0bf6',
  public Hotels: any;
  public Suppliers: string;
  public durations: number; // 7,
  public PriceMin: string; // '',
  public PriceMax: string; // '',
  public Currency: string; // 'RUR',
  public AviaQuotasAvailable: boolean; //  true,
  public AviaQuotasRequest: boolean; //  true,
  public AviaQuotasNotAvailable: boolean; //  false,
  public HotelQuotasAvailable: boolean; //  true,
  public HotelQuotasRequest: boolean; //  true,
  public HotelQuotasNotAvailable: boolean; //  false,
  public AviaTransferInclude: boolean; //  true,
  public PageSize: number; // 3000
  public OnlyMinPriceByHotel: boolean; //  true,
  public _: number;
  private Debug = 'True';

  constructor() {
    this._ = new Date().getTime();

    this.AviaQuotasAvailable = false;
    this.AviaQuotasRequest = false;
    this.AviaQuotasNotAvailable = false;

    this.HotelQuotasAvailable = false;
    this.HotelQuotasRequest = false;
    this.HotelQuotasNotAvailable = false;

    this.AviaTransferInclude = false;
    this.OnlyMinPriceByHotel = true;
  }
}
