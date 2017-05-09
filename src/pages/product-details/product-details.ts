import {Component, forwardRef, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Navigation} from "../../navigation/navigation";

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {

  public productId:string;

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productId = navParams.get('productId');
  }
  ionViewWillEnter() {
    this.navigation.active = 'products';
  }


}
