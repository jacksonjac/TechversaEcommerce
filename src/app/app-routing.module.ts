import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProductdetailsPageComponent } from './components/productdetails-page/productdetails-page.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' }, 
  {path:'intro',component:IntroPageComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'cart', component: CartPageComponent},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'product/:id', component: ProductdetailsPageComponent},
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
