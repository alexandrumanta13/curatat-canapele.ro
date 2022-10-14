import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.active = true;
  }
  closeMenu() {
    this.active = false;
  }

  navigateTo(url: string) {
    this.active = false;
    this.router.navigate([url])
  }

  toggleLink(event, link) {
    console.log(link)
    const links = document.querySelectorAll('.active');
    
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    event.target.closest(".parent-link").classList.add('active');
    document.getElementById("collapseMenu").click();
    this.router.navigate([link]);
  }

}
