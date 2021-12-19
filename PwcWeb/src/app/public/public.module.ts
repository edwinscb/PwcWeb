import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { RegisterComponent } from './register/containers/register.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { LoginRegisterNavComponent } from './login/components/login-register-nav/login-register-nav.component';

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    LoginRegisterNavComponent,
  ],
  exports: [],
  providers: []
})

export class PublicModule {
  constructor() {}
}
