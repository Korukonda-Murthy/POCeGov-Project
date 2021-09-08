import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserLoginComponent } from './UserLogin/user-login/user-login.component';
import { UserRegistrationComponent } from './UserRegistration/user-registration/user-registration.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'UserLogin', component: UserLoginComponent },
  { path: 'UserRegistration', component: UserRegistrationComponent },
  { path: 'Home', component: HomeComponent},
  {path: 'VehicleReg', component: VehicleRegistrationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path:'resetpassword', component: ResetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
