import {Component, Input, SimpleChange} from '@angular/core';

import {App, Nav, NavController, NavParams, ViewController} from 'ionic-angular';

import {HomePage} from "../pages/home/home";
import {ProductsPage} from "../pages/products/products";
import {LampsPage} from "../pages/lamps/lamps";
import {FixturesPage} from "../pages/fixtures/fixtures";
import {BuyPage} from "../pages/buy/buy";
import {ProductDetailsPage} from "../pages/product-details/product-details";

@Component({
  selector:    'navigation',
  templateUrl: 'navigation.html',
  inputs: ['active', 'color']
})
export class Navigation {
  private _active;
  private _parent;
  items = [];
  itemsInMenu = [];

  @Input('color') public color;

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

  constructor(public app: App, public nav: NavController, public navParams: NavParams) {
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
      },
      {
        title: "Product Details",
        value: "product-details",
        page: ProductDetailsPage,
        active:false,
        inMenu: false
      }
    ];
    this.itemsInMenu = this.items.filter((item) => {
      return item.inMenu;
    });
    this.active = this.navParams.get('item') && this.navParams.get('item').value || 'home';
    console.log('value active', this.active);
  }

  openNavDetailsPage(item, addlItems) {
    if(typeof item == 'string') item = this.items.find((page) => {
      return page.value == item;
    });
    if(this.parent!=item.value) {
      if(this.active == item.value) {
        item.active = true;
      }
      let rootNav:NavController = this.app.getRootNav();
      // TODO: reorder history stack to re-instate pages without losing navigation
      // let historyViews:ViewController[]   = rootNav.getViews();
      // let targetView:ViewController       = null;
      // let updatedHistory:ViewController[] = historyViews.filter((view) => {
      //   if(view.component.name == item.page.name) {
      //     targetView = view;
      //     return false;
      //   }
      //   return true;
      // });
      // if(targetView !== null) {
      //   rootNav.push(targetView.component,targetView.data, {
      //     id: targetView.id, animate: true, updateUrl: true
      //   });
      // } else {
        this.nav.push(item.page, Object.assign({ item: item },addlItems||{}), {
          updateUrl: true
        });
      // }
    } else {
      if(addlItems&&addlItems.groupId) {
        this.nav.push(item.page, (Object.assign({ item: item }, addlItems)));
      } else {
        this.nav.popTo(item.page, {item: item}).catch(() => {
          this.nav.setRoot(HomePage).then(() => {
            this.nav.popToRoot();
          });
        });
      }
      // TODO: Scroll to page top
    }
    return false;
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes['active']) this.parent = changes['active'].currentValue;
  }
}
