import {Component, forwardRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Navigation} from "../../navigation/navigation";

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter() {
    this.navigation.active = 'products';
  }


}
