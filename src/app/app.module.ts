import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { QuickFormContactComponent } from './components/quick-form-contact/quick-form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormContactCategoriesComponent } from './components/form-contact-categories/form-contact-categories.component';

import { SimpleFromContactComponent } from './components/simple-from-contact/simple-from-contact.component';

import { ContactComponent } from './pages/contact/contact.component';
import { GdprComponent } from './pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { CuratareCanapeleComponent } from './pages/curatare-canapele/curatare-canapele.component';
  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    AboutComponent,
    QuickFormContactComponent,
    HomeComponent,
    NotFoundComponent,
    FormContactCategoriesComponent,
    
    SimpleFromContactComponent,
   
    ContactComponent,
    GdprComponent,
    ConfidentialityComponent,
    CookiesComponent,
    TermsComponent,
    ThankYouComponent,
    WhatsappComponent,
    CuratareCanapeleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgImageSliderModule
    
  ],
  exports: [
    QuickFormContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
