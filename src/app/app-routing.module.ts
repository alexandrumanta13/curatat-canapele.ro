import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { ThankYouComponent } from "./components/thank-you/thank-you.component";


import { GdprComponent } from './pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { CookiesComponent } from "./pages/cookies/cookies.component";
import { TermsComponent } from "./pages/terms/terms.component";
import { CuratareCanapeleComponent } from './pages/curatare-canapele/curatare-canapele.component';
import { CuratareTapiterieAutoComponent } from './pages/curatare-tapiterie-auto/curatare-tapiterie-auto.component';
import { CuratareSalteleComponent } from './pages/curatare-saltele/curatare-saltele.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'Curatare Canapele, Saltele, Tapiterii Auto Bucuresti si Ilfov',
      description: 'Firma specializata pe serviciile de curatare canapele, saltele si tapiterii auto. Deplasare gratuita in Bucuresti si Ilfov. Vezi preturile.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'despre-noi', component: AboutComponent,
    data: {
      title: 'curatare canapele',
      description: 'Firma profesionala de curatare canapele la domiciliu in Bucuresti si Ilfov. Cu aspirator injectie-extractie. Dezinfectam si igeinizam.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'curatare-canapele', component: CuratareCanapeleComponent,
    data: {
      title: 'curatare canapele',
      description: 'Firma profesionala de curatare canapele la domiciliu in Bucuresti si Ilfov. Cu aspirator injectie-extractie. Dezinfectam si igeinizam.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'curatare-tapiterie-auto', component: CuratareTapiterieAutoComponent,
    data: {
      title: 'Curatare tapiterie auto',
      description: 'Firma profesionala de curatare tapiterie auto si detailing auto la domiciliu in Bucuresti si Ilfov. Cu aspirator injectie-extractie. Dezinfectam si igeinizam.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'curatare-saltele', component: CuratareSalteleComponent,
    data: {
      title: 'Curatare saltele',
      description: 'Firma profesionala de curatare saltele la domiciliu in Bucuresti si Ilfov. Cu aspirator injectie-extractie. Dezinfectam si igeinizam.',
      ogUrl: 'your og url'
    }
  },

   {
    path: 'setari-gdpr', component: GdprComponent,
    data: {
      title: 'Setari GDPR',
      description: '',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'confidentialitate', component: ConfidentialityComponent,
    data: {
      title: 'Confidentialitate',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'setari-cookies', component: CookiesComponent,
    data: {
      title: 'Setari cookies',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'termeni-si-conditii', component: TermsComponent,
    data: {
      title: 'Termeni si conditii',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      title: 'Contact',
      description: 'Apeleaza la servicii profesionale de curatare mocheta si covor la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.',
      ogUrl: 'your og url'
    }
  },
  { path: '404', component: NotFoundComponent },

  { path: 'mesaj-trimis', component: ThankYouComponent },

  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
