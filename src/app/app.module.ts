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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
