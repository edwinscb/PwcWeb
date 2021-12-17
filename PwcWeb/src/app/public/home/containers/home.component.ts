import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/core/shared/components/carousel/carousel.const';
import { CarouselItem } from 'src/app/core/shared/components/carousel/carouselItem/carouselItem.metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public carouselData:CarouselItem[]=CAROUSEL_DATA_ITEMS;
  constructor() {}

  ngOnInit() {}
}
