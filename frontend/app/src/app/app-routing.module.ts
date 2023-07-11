import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsertypeComponent } from './components/usertype/usertype.component';
import { SignInComponent as UserSignInComponent} from './components/user/sign-in/sign-in.component';
import { SignInComponent as DoctorSignInComponent} from './components/doctor/sign-in/sign-in.component';
import { OtpVerificationComponent } from './components/user/otp-verification/otp-verification.component';
import { HomeComponent as UserHomeComponent } from './components/user/home/home.component';
const routes: Routes = [
  {path: '', component: UsertypeComponent},
  {path: 'userSignIn', component: UserSignInComponent},
  {path: 'doctorSignIn', component: DoctorSignInComponent},
  {path: 'otpVerify', component: OtpVerificationComponent},
  {path: 'userHome', component: UserHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
