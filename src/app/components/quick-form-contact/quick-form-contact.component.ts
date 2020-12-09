import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare let Email: any;
@Component({
  selector: 'app-quick-form-contact',
  templateUrl: './quick-form-contact.component.html',
  styleUrls: ['./quick-form-contact.component.scss']
})


export class QuickFormContactComponent implements OnInit {


  email: string;
  name: string;
  message: string;
  endpoint: string;

  http: HttpClient;

  constructor(http: HttpClient, private router: Router) {
    this.http = http;
  }

  ngOnInit() {
    this.endpoint = "https://curatat-canapele.ro/data/sendEmail.php";
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    let postVars = {
      email: form.value.email,
      name: form.value.name,
      phone: form.value.phone,
      message: form.value.message,
      gdpr: form.value.gdpr,
    };

    console.log(postVars)


    this.http.post(this.endpoint, postVars)
      .subscribe(response => {
          console.log(response)
          this.router.navigate(['/mesaj-trimis'])
        }, error => {
          console.log(error)
        });

    form.reset();
  }
}
