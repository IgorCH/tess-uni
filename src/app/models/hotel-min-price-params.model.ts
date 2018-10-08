export class HotelMinPriceParams {
  public searchId: string;
  public itemsCountOnPage: number;
  public pageNumber: number;
  public _: number;
  private Debug = 'True';

  constructor() {
    this._ = new Date().getTime();
  }
}
