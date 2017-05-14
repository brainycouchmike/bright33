import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {Navigation} from "../navigation/navigation";

import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { LampsPage } from '../pages/lamps/lamps';
import {FixturesPage} from "../pages/fixtures/fixtures";
import {BuyPage} from "../pages/buy/buy";
import {ProductDetailsPage} from "../pages/product-details/product-details";


@NgModule({
  declarations: [
    MyApp,
    Navigation,
    HomePage,
    ProductsPage,
    ProductDetailsPage,
    LampsPage,
    FixturesPage,
    BuyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      /** Uncomment to remove # from path, further config required **/
      locationStrategy: 'path'
    }, {
      links: [
        { component: HomePage, name: 'Home', segment: '' },
        { component: ProductsPage, name: 'Products', segment: 'products' },
        { component: LampsPage, name: 'LED Lamps', segment: 'products/lamps' },
        { component: LampsPage, name: 'LED Lamps Group', segment: 'products/lamps/:groupId' },
        { component: FixturesPage, name: 'LED Fixtures', segment: 'products/fixtures' },
        { component: FixturesPage, name: 'LED Fixtures Group', segment: 'products/fixtures/:groupId' },
        { component: BuyPage, name: 'Buy', segment: 'buy' },
        { component: ProductDetailsPage, name: 'Product Details', segment: 'products/:productId' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Navigation,
    HomePage,
    ProductsPage,
    ProductDetailsPage,
    LampsPage,
    FixturesPage,
    BuyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Navigation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
