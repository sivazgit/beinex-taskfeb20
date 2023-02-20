import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   myForm:any = FormGroup;

  
  constructor(private fb:FormBuilder, private cs:CommonService, private router:Router){}
  ngOnInit(){

      this.myForm = this.fb.group({
        user: ['San', Validators.required],
        email: ['',[Validators.required]],
        password:['',Validators.required],
      });
  
  }

  register(){
    if(this.myForm.valid){
      let user=this.myForm.value.user;
      let email= this.myForm.value.email;
      let password= this.myForm.value.password;
      this.cs.addData(user, email, password);
      this.router.navigateByUrl('dashboard');
    }

  }
}
