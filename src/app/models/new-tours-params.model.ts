export class NewToursParams {
  public searchId: string;
  public itemsCountOnPage: number;
  public _: number;
  private Debug = 'True';

  constructor() {
    this._ = new Date().getTime();
  }
}
