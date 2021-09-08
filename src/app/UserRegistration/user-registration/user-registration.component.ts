import { Component, OnInit } from '@angular/core';
import { Userlogin } from 'src/app/models/userlogin.model';
import { AuthService } from 'src/app/_services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  form!: FormGroup;
  userRegisterObj: Userlogin = new Userlogin();
  curruntRegister?: Userlogin[];
  /* Userlogin = {
    user_email: '',
    user_password:'',
    first_name: '',
    family_name: '',
  }; */
  /* Userlogin = {
    user_email: '',
    user_password:'',
    first_name: '',
    family_name: '',
  }; */

  constructor(private fb: FormBuilder ,private authService: AuthService ) { 
    this.form = this.fb.group({
      user_email: ['', Validators.required],
      user_password: ['', Validators.required],
      first_name: ['', Validators.required],
      family_name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.authService.getAll()
                    .subscribe(data => {
                      this.curruntRegister = data;
                      console.log(data);

                    })
   
  }

 /*  onSubmit(): void {
    /* const { username, email, password } = this.form;
    console.log( username, email, password ) */

    /* this.authService.register(username, email, password).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err: any) => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    ); 
  }
 */
  onSubmit() {
    console.log(this.form.value);
    this.userRegisterObj.family_name  = this.form.value.family_name;
    this.userRegisterObj.first_name  = this.form.value.first_name;
    this.userRegisterObj.user_password  = this.form.value.user_password;
    this.userRegisterObj.user_email = this.form.value.user_email;

    this.authService.userRegister(this.userRegisterObj)
                    .subscribe((res) =>{console.log(res)})

    this.form.reset()

  }

}
