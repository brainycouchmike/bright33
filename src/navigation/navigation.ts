import {Component, Input, ViewChild} from '@angular/core';
// import {List, Item} from 'ionic/ionic';

import {Nav, NavController, NavParams} from 'ionic-angular';

import {HomePage} from "../pages/home/home";
import {ProductsPage} from "../pages/products/products";
import {LampsPage} from "../pages/lamps/lamps";
import {FixturesPage} from "../pages/fixtures/fixtures";
import {BuyPage} from "../pages/buy/buy";


@Component({
  templateUrl: 'navigation-item.html',
  selector:    'navigation-item'
})
export class NavigationDetailsPage {

  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector:    'navigation',
  templateUrl: 'navigation.html',
})
export class Navigation {
  get active() {
    return this._active;
  }

  set active(value) {
    this._active = value;
  }
  items = [];
  itemsInMenu = [];

  @Input('active') _active;

  constructor(public nav: NavController) {
    this.items = [
      {
        title: "Home",
        value: "home",
        page: HomePage,
        active:false,
        inMenu:false
      },
      {
        title: "Products",
        value: "products",
        page: ProductsPage,
        active:false,
        inMenu:true
      },
      {
        title: "LED Lamps",
        value: "lamps",
        page: LampsPage,
        active:false,
        inMenu:true
      },
      {
        title: "LED Fixtures",
        value: "fixtures",
        page: FixturesPage,
        active:false,
        inMenu:true
      },
      {
        title: "Buy",
        value: "buy",
        page: BuyPage,
        active:false,
        inMenu:true
      }
    ];
    this.itemsInMenu = this.items.filter((item) => {
      return item.inMenu;
    });
  }

  openNavDetailsPage(item) {
    if(this.active == item.value) item.active = true;
    this.nav.push(item.page, { item: item });
    return false;
  }
}
