import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    MatToolbarModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
    MatToolbarModule,
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
