/**
 * Created by brainycouch on 5/10/17.
 */
import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Http} from "@angular/http";

@Injectable()
export class ProductsService {
  dataUrl: string = "/assets/json/products.json";
  constructor(public http: Http) {}
  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.dataUrl).forEach(response => {
        let data: JSON = response.json();
        resolve(data);
      });
    });
  }
}
