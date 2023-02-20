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
}
