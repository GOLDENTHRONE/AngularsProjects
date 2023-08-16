import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  IsSellerLoggedIn=new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router:Router) { }
  userSignUp(data: SignUp) {
    return this.http.post('http://localhost:3000/database', data, { observe: 'response' }).subscribe((result) => {
    this.IsSellerLoggedIn.next(true);
    localStorage.setItem('seller',JSON.stringify(result.body))
    if (data.name !='')
    {
    this.router.navigate(['seller-home'])}
    })

    // console.warn("service call")
  }
}
