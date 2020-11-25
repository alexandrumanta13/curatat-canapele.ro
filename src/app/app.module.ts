import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SliderSectionComponent } from './pages/home/slider-section/slider-section.component';
import { ServiceSectionComponent } from './pages/home/service-section/service-section.component';
import { AboutComponent } from './pages/about/about.component';
import { QuickFormContactComponent } from './components/quick-form-contact/quick-form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormContactCategoriesComponent } from './components/form-contact-categories/form-contact-categories.component';

import { SimpleFromContactComponent } from './components/simple-from-contact/simple-from-contact.component';

import { ServiceBiocidComponent } from './pages/home/service-biocid/service-biocid.component';
import { ServiceTestimonialsComponent } from './pages/home/service-testimonials/service-testimonials.component';

import { ServicePerfectCleanComponent } from './pages/home/service-perfect-clean/service-perfect-clean.component';

import { ContactComponent } from './pages/contact/contact.component';
import { GdprComponent } from './pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { PricesComponent } from './pages/prices/prices.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderSectionComponent,
    ServiceSectionComponent,
    AboutComponent,
    QuickFormContactComponent,
    HomeComponent,
    NotFoundComponent,
    FormContactCategoriesComponent,
    
    SimpleFromContactComponent,
    
    ServiceBiocidComponent,
    ServiceTestimonialsComponent,
    
    ServicePerfectCleanComponent,
   
    ContactComponent,
    GdprComponent,
    ConfidentialityComponent,
    CookiesComponent,
    TermsComponent,
    ThankYouComponent,
    PricesComponent,
    WhatsappComponent
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
