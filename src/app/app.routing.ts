import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { ModuleWithProviders } from "@angular/core";
import { GalleryComponent } from "app/gallery/gallery.component";


const routes: Routes = [
    {
        path: 'home',//localhost:3000
        component: HomeComponent
    },
    {
        path: 'about',//localhost:3000
        component: AboutComponent
    },
    {
        path: 'blog',//localhost:3000
        component: BlogComponent
    },
     {
        path: 'gallery',//localhost:3000
        component: GalleryComponent
    },
    {
        path: 'contact',//localhost:3000
        component: ContactComponent
    }

]
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);