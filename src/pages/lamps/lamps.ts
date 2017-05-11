import {Component, forwardRef, ViewChild} from '@angular/core';
import {Navigation} from "../../navigation/navigation";
import {LampsService} from "../lamps/lamps.service";
import {NavParams} from "ionic-angular";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'page-lamps',
  templateUrl: 'lamps.html',
  providers: [LampsService,ProductsService]
})
export class LampsPage {
  public group: any;
  private _lamps: any[];
  set lamps(value) { this._lamps = value; }
  get lamps() {
    if(this._lamps == null) {
      this.lampsService.getItems().then((lamps) => {
        this._lamps = lamps;
      });
    }
    return this._lamps;
  }

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;
  ionViewWillEnter() {
    this.navigation.active = 'lamps';
  }

  constructor(public lampsService: LampsService, public productsService: ProductsService, public params: NavParams) {
    let groupId: string = this.params.get('groupId');
    if(groupId) {
      this.lampsService.getItems().then((lamps) => {
        this._lamps = lamps;
        let group = this._lamps.find((lamp) => {
          return lamp.id == groupId;
        });
        this.productsService.getProducts().then((products) => {
          this._lamps = products.filter((product) => {
            return group.items.includes(product.id);
          });
          this.group = group;
        });
      });
    }

  }


}
