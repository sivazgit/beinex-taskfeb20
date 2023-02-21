import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public user!:any;
  public email!:any;
  public password!:any;

  constructor(private http:HttpClient) { }

  addData(user:any, email:any, password:any){
    this.user=user;
    this.email=email;
    this.password=password;
  }

  getData(){
    let userDetails={
      user:this.user,
      email:this.email,
      password:this.password
    }
    return userDetails;
  
  }

  getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }


  getCountryName(name:string){
    return this.http.get('https://restcountries.com/v3.1/name/'+name);
  }

  getCountryRegion(region:string){
    return this.http.get('https://restcountries.com/v3.1/region/'+region);
  }

  getCountryLanguage(language:string){
    return this.http.get('https://restcountries.com/v3.1/lang/'+language);
  }
}
