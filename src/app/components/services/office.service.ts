/**
 * Created by Nicko on 26/11/17.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Office  } from '../models/Office';
import {catchError, tap} from "rxjs/operators";
import {Member} from "../models/Member";
import {Property} from "../models/Property";



@Injectable()
export class Service {

  private officesUrl = 'http://199.168.136.144:9000/search?text=';  // URL to web api
  private officesUrlarg = '&mls=IMLS&collection=';  // URL arguments to web api

  public lista: Array<{}>;

  /** concatenate url api */
  getMembers(inputwrite:string, termapi: string): Observable<Member[]> {
    return this.http.get<Member[]>(this.getUrl(inputwrite, termapi))
      .pipe(
        tap(data => console.log('Members : '+data))
      );
  }

  constructor( private http: HttpClient) { }


  /** GET office from the server */
  getOffices (inputwrite:string, termapi: string): Observable<Office[]> {
    return this.http.get<Office[]>(this.getUrl(inputwrite, termapi))
      .pipe(
        tap(data => console.log('Offices : '+data))
      );
  }


  getProperties (inputwrite:string, termapi: string): Observable<Property[]> {
    return this.http.get<Property[]>(this.getUrl(inputwrite, termapi))
      .pipe(
        tap(data => console.log('Properties : '+data))
      );
  }

  getUrl(inputwrite:string, termapi: string): string {
    inputwrite  = inputwrite.split(' ').join('%20');
    console.log(this.officesUrl+inputwrite+this.officesUrlarg+termapi+"&");
    return this.officesUrl+inputwrite+this.officesUrlarg+termapi+"&";
  }


}
