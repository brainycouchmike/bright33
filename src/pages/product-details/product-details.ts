import {Component, forwardRef, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Navigation} from "../../navigation/navigation";
import {ProductsService} from "../products/products.service";
import {Product} from "../products/product";

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
  providers: [ProductsService]
})
export class ProductDetailsPage {

  private _product:Product;
  set product(value: Product) { this._product = value;}
  get product(): Product {
    return this._product;
  }

  public productId:string;

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public navParams: NavParams, public productsService: ProductsService) {
    this.productId = navParams.get('productId');
    this.productsService.getProductById(this.productId).then((item) => {
      this._product = item;
    });


  }
  ionViewWillEnter() {
    this.navigation.active = 'products';
  }


}
