import { Injectable } from '@angular/core';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {

  constructor(private router:Router) { }

  userLoginCredentials:{firstname:string,lastname:string,email:string,
 password: string}[] = [

    {firstname:"Pallavi",lastname:"Pedewar",email:"pedewarpallavi@gmail.com",
  password: '12345'},
    {firstname:"viren",lastname:"shaha",email:"shah.viren@outlook.com",
     password: '12345'}]
  }
    