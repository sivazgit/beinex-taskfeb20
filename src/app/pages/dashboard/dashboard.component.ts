import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public userDetails!:any;
  public viewOrHide!:false;

constructor(private cs:CommonService){
  this.userDetails=this.cs.getData();
  console.log(this.userDetails);

  
}


}
