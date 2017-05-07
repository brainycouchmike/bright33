import {Component, forwardRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Navigation} from "../../navigation/navigation";

@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html'
})
export class FixturesPage {

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter() {
    this.navigation.active = 'fixtures';
  }

}
