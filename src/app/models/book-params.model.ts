export class Tourist {
  public AgeCategory: 'ADULT';
  public FirstName: string; // 'Тестовый';
  public LastName: string; // 'Тестовый';
  public MiddleName: string; // '';
  public Gender: number; // 0;
  public Citizenship: string; // 'RU_43';
  public DateOfBirth: {'Format': 'dd.MM.yyyy', 'Serialized': '13.07.1988'};
  public DocumentDateOfIssuance: {'Format': 'dd.MM.yyyy', 'Serialized': '30.09.2014'};
  public DocumentValidDate: {'Format': 'dd.MM.yyyy', 'Serialized': ''};
  public DocumentNumber: string; // '2323232323';
  public TypeOfDocument: string; // 'PASSPORT';
  public ContactTelephoneNumber: string; // '';
}

export class BookParams {
  public IsPreOrder: boolean; // true;
  public supplierBooking: boolean; // false;
  public responseID: string; // 'Without_Flight-to-RU-from-15.08.2018-15.08.2018-for-7-7-nights-2-adults-TSC-suppliers-rur-currency-iopqJrhYNk-hotels';
  public selectedTourID: string; // '0e040283-c397-4663-998d-ae209e3c5c80';
  public selectedServiceVariants: any[];
  public tourists: Tourist[];
  public privateInfoForBook: {
    Address: '';
    ContactTelephoneNumber: '';
    DateOfBirth: {'Format': 'dd.MM.yyyy', 'Serialized': ''};
    DocumentDateOfIssuance: {'Format': 'dd.MM.yyyy', 'Serialized': ''};
    DocumentIssuerCode: '';
    DocumentIssuerName: '';
    DocumentNumber: '';
    Gender: number;
    Email: string;
    FirstName: '';
    LastName: '';
    MiddleName: ''
  };

  constructor() {
    this.IsPreOrder = true;
    this.supplierBooking = false;
    this.selectedServiceVariants = [];
    this.tourists = [];
    this.privateInfoForBook = {
      Address: '',
      ContactTelephoneNumber: '',
      DateOfBirth: {'Format': 'dd.MM.yyyy', 'Serialized': ''},
      DocumentDateOfIssuance: {'Format': 'dd.MM.yyyy', 'Serialized': ''},
      DocumentIssuerCode: '',
      DocumentIssuerName: '',
      DocumentNumber: '',
      Gender: 0,
      Email: '',
      FirstName: '',
      LastName: '',
      MiddleName: ''
    };
  }
}
