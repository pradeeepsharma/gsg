import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from "./app.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {AngularFireModule} from 'angularfire2';
import {LocationStrategy, 
       HashLocationStrategy,
       PathLocationStrategy //HTML 5,default
      } 
                        from "@angular/common";
import { UserService } from "app/contact/user.service";

export const firebaseConfig = {
  apiKey: 'efe863f2-89ea-495e-b0df-357f3701005e',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBauIlf4Qg_k0LsbWlyLPa1gNVp57YBkD0'
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [

     {
      provide : LocationStrategy,
      useClass: HashLocationStrategy //HashLocationStrategy
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
