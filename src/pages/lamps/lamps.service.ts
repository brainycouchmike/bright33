/**
 * Created by brainycouch on 5/10/17.
 */
import {Injectable} from '@angular/core';
import {Lamp} from "./lamp";
import {Http} from "@angular/http";

@Injectable()
export class LampsService {
  dataUrl: string = "/assets/json/lamps.json";
  constructor(public http: Http) {}
  getItems(): Promise<Lamp[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.dataUrl).forEach(response => {
        let data: JSON = response.json();
        resolve(data);
      });
    });
  }
}
