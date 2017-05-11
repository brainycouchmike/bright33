import {Component, forwardRef, ViewChild} from '@angular/core';
import {Navigation} from "../../navigation/navigation";
import {FixturesService} from "./fixtures.service";
import {Fixture} from "./fixture";

@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html',
  providers: [FixturesService]
})
export class FixturesPage {
  get fixtures(): Fixture[] {
    if(this._fixtures==null) {
      this.fixtureService.getItems().then((fixtures) => {
        this._fixtures = fixtures;
      });
    }
    return this._fixtures;
  }

  set fixtures(value: Fixture[]) {
    this._fixtures = value;
  }
  private _fixtures: Fixture[];

  @ViewChild(forwardRef(() => Navigation))
  private navigation: Navigation;

  constructor(public fixtureService: FixturesService) {


  }
  ionViewWillEnter() {
    this.navigation.active = 'fixtures';
  }

}
