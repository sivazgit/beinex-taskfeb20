import { Component } from '@angular/core';
import {CommonService} from 'src/app/service/common.service'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {

  public searchCountryVal:string='';
  constructor(private cs:CommonService){

  }

  getCountries(){
    this.cs.getCountries().subscribe((res:any)=>{
      console.log(res);
      
    })
  }

  getCountryName(){  
      this.cs.getCountryName(this.searchCountryVal).subscribe((res:any)=>{
        console.log(res);
        
      })
  }

}
