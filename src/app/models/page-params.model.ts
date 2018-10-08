export class PageParams {
  public searchId: string;
  // 'MOW-to-6aabf196-38fd-4bf3-b643-f18958fc0bf6,AER-RU-from-
  // 10.06.2018-15.06.2018-for-7-7-nights-2-adults-rur-currency-VRxxb6FF3A-hotels',
  public itemsCountOnPage: number; // 5000,
  public GetAllResults: boolean; // true,
  private _: number; // 1528097074605
  private Debug = 'True';

  constructor() {
    this._ = new Date().getTime();
  }
}
