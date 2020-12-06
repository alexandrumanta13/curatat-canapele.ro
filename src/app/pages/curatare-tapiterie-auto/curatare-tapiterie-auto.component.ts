import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-curatare-tapiterie-auto',
  templateUrl: './curatare-tapiterie-auto.component.html',
  styleUrls: ['./curatare-tapiterie-auto.component.scss']
})
export class CuratareTapiterieAutoComponent implements OnInit {

  customOptions: OwlOptions = {
    autoHeight: true,
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 3000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
