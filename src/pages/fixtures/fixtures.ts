import {Component, forwardRef, ViewChild} from '@angular/core';
import {Navigation} from "../../navigation/navigation";
import {FixturesService} from "./fixtures.service";
import {Fixture} from "./fixture";
import {ProductsService} from "../products/products.service";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html',
  providers: [FixturesService, ProductsService]
})
export class FixturesPage {
  private group;
  private _fixtures;
  set fixtures(value: Fixture[]) { this._fixtures = value; }
  get fixtures(): Fixture[] {
    if(this._fixtures==null) {
      this.fixturesService.getItems().then((fixtures) => {
        this._fixtures = fixtures;
      });
    }
    return this._fixtures;
  }

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public params: NavParams, public fixturesService: FixturesService, public productsService: ProductsService) {}

  ionViewWillEnter() {
    this.navigation.active = 'fixtures';
    let groupId: string = this.params.get('groupId');
    if(groupId) {
      this.fixturesService.getItems().then((fixtures) => {
        this._fixtures = fixtures;
        let group = this._fixtures.find((lamp) => {
          return lamp.id == groupId;
        });
        this.productsService.getProducts().then((products) => {
          this._fixtures = products.filter((product) => {
            return group.items.indexOf(product.id)!=-1;
          });
          this.group = group;
        });
      });
    }
  }

}
