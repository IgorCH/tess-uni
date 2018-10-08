import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Client, ClientOptions} from './libts/client';
import {createSoapClient} from './libts/soap';

export interface OperationResponse {
  status?: number;
  xml?: string;
  json?: any;
}

export interface RequestOptions {
  proxy?: {
    address: string,
    path: string
  };
}

@Injectable()
export class SOAPService {

  constructor(private http: HttpClient) { }

  createClient(wsdlDef: string, options?: ClientOptions): Client {
    return createSoapClient(wsdlDef);
  }

}
