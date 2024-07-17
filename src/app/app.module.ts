import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProductdetailsPageComponent } from './components/productdetails-page/productdetails-page.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { IntroPageComponent } from './components/intro-page/intro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartPageComponent,
    ProfilePageComponent,
    ProductdetailsPageComponent,
    SearchpipePipe,
    IntroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
