import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  regiForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private route: Router) { 
    this.regiForm = this.fb.group({
      // tslint:disable-next-line: object-literal-key-quotes
      'Email': [null, Validators.required],
      // tslint:disable-next-line: object-literal-key-quotes
      'Password': [null, Validators.required],

    });
  }

  ngOnInit(): void {
  }
  onSubmit(data : any): void{

  }
  forgotPassword(){
    this.route.navigate(['/forgotPassword']);

  }

}
