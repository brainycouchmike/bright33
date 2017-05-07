import {Component, Input, SimpleChange} from '@angular/core';

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
  inputs: ['active']
})
export class Navigation {
  private _active;
  private _parent;
  items = [];
  itemsInMenu = [];

  @Input()
  get active() {
    return this._active;
  }

  set active(value) {
    this._active = (value && value.trim()) || 'home';
  }

  get parent() {
    return this._parent;
  }

  set parent(value) {
    this._parent = value;
  }

  constructor(public nav: NavController) {
    this.items = [
      {
        title: "Home",
        value: "home",
        page: HomePage,
        active:true,
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
    if(this.parent!=item.value) {
      if(this.active == item.value) item.active = true;
      this.nav.push(item.page, { item: item });
    } else {
      // TODO: Scroll to page top
    }
    return false;
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = changedProp.currentValue;
      if(propName=='active') this.parent = to;
      // if (changedProp.isFirstChange()) {
      //   console.log(`Initial value of ${propName} set to ${to}`);
      // } else {
      //   let from = JSON.stringify(changedProp.previousValue);
      //   console.log(`${propName} changed from ${from} to ${to}`);
      // }
    }
  }
}
