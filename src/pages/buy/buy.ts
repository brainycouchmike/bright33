import {Component, forwardRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Navigation} from "../../navigation/navigation";

@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html'
})
export class BuyPage {

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter() {
    this.navigation.active = 'buy';
  }

}
