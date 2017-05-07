import {Component, forwardRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Navigation} from "../../navigation/navigation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Navigation]
})
export class HomePage {

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter() {
    this.navigation.active = 'home';
  }

}
