import { Component, OnInit } from '@angular/core';
import {Service} from "../services/office.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  input_placeholder: string = "select some option from menu";
  service: any;
  termino: string;

  members: any = [];
  offices: any = [];

  propertyAddress: any = [];
  propertyCity: any = [];
  propertyHighSchool: any = [];
  propertySchoolDist: any = [];
  propertyState: any = [];
  responseProperty: any = [];

  constructor(api: Service) {
    this.service = api;
    this.termino = 'Member';
  }

  ngOnInit() {
    this.onClickMember("");
  }

  onClickMember(term: string){
    this.input_placeholder = 'Type the name of the agent or broker you are looking for';
    this.termino = term;
    this.resetResoluts();
  }

  onClickProperty(term: string){
    this.input_placeholder = 'Type a County, City, MLS Area, Zip Code, School or Neighborhood';
    this.termino = term;
    this.resetResoluts();
  }

  onClickOffice(term: string){
    this.input_placeholder = 'Type the name of the brokerage office you are looking for';
    this.termino = term;
    this.resetResoluts();
  }


  /**  set input data */
  inputWrite(search: string){
    console.log(search);
    if (search.length > 0){
      switch (this.termino){
        case "Member":
          this.service.getMembers(search, this.termino).subscribe(data => {
            this.bindDataMember(data.terms.Member);
          });
          break;
        case "Office":
          this.service.getOffices(search, this.termino).subscribe(data => {
            this.bindDataOffice(data.terms.Office);
          });
          break;
        case "Property":
          this.service.getProperties(search, this.termino).subscribe(data => {
            this.bindDataProperty(data);
          });
          break;
      }
    } else {
      this.resetResoluts();
    }
  }

  resetResoluts(){
    this.members = [];
    this.offices = [];
    this.propertyAddress = [];
    this.propertyCity = [];
    this.propertyHighSchool = [];
    this.propertySchoolDist = [];
    this.propertyState = [];
    this.responseProperty = false;
  }

  bindDataMember(data: any){
    this.members = data;
  }

  bindDataOffice(data: any){
    this.offices = data;
  }

  bindDataProperty(data: any){
    this.propertyAddress = data.terms.Address;
    this.propertyCity = data.terms.City;
    this.propertyHighSchool = data.terms.HighSchool;
    this.propertySchoolDist = data.terms.SchoolDist;
    this.propertyState = data.terms.State;
    this.responseProperty = true;
  }


}
