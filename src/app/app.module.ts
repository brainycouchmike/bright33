import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {Navigation, NavigationDetailsPage} from "../navigation/navigation";

import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { LampsPage } from '../pages/lamps/lamps';
import {FixturesPage} from "../pages/fixtures/fixtures";
import {BuyPage} from "../pages/buy/buy";
import {ProductDetailsPage} from "../pages/product-details/product-details";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailsPage,
    LampsPage,
    FixturesPage,
    BuyPage,
    Navigation,
    NavigationDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailsPage,
    LampsPage,
    FixturesPage,
    BuyPage,
    Navigation,
    NavigationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Navigation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
