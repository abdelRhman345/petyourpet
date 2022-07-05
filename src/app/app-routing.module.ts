import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ServicesComponent } from './views/ourservices/services.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { SignupComponent } from './shared/components/auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },

  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
