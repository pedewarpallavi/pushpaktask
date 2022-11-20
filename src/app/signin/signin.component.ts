import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserprofilesService } from '../userprofiles.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 
  constructor(private fb:FormBuilder,private router:Router , private userprofile:UserprofilesService) { }
  signInForm:FormGroup;
  wrongPassword :boolean=false;
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      
      email : new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,Validators.required),
    })

  }

  onSubmit(){
    if (this.userprofile.userLoginCredentials.some((x)=>{
      return x.email === this.signInForm.get('email').value;
   }) 
   && (this.userprofile.userLoginCredentials.some((y)=>{
      return y.password === this.signInForm.get('password').value }
     )))
   {
 this.router.navigate(['dashboard'])
   } else{
    this.wrongPassword=true;

  }
}

}
