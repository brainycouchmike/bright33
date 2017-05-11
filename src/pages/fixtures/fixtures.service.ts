/**
 * Created by brainycouch on 5/10/17.
 */
import {Injectable} from '@angular/core';
import {Fixture} from "./fixture";
import {Http} from "@angular/http";

@Injectable()
export class FixturesService {
  dataUrl: string = "/assets/json/fixtures.json";
  constructor(public http: Http) {}
  getItems(): Promise<Fixture[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.dataUrl).forEach(response => {
        let data: JSON = response.json();
        resolve(data);
      });
    });
  }
}
