import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Navigation} from "../../navigation/navigation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Navigation]
})
export class HomePage {
  @ViewChild(Navigation) navigation;
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    this.navigation.active = 'home';
    console.log('home navigation: ', this.navigation.active );
  }

}
