import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
  ],
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
