import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-curatare-saltele',
  templateUrl: './curatare-saltele.component.html',
  styleUrls: ['./curatare-saltele.component.scss']
})
export class CuratareSalteleComponent implements OnInit {

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
