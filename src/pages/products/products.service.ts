/**
 * Created by brainycouch on 5/10/17.
 */
import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Http} from "@angular/http";

@Injectable()
export class ProductsService {
  public _products;
  dataUrl: string = "/assets/json/products.json";
  constructor(public http: Http) {}
  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      if(!this._products) {
        this.http.get(this.dataUrl).forEach(response => {
          let data: JSON = response.json();
          resolve(this._products = data);
        });
      } else {
        resolve(this._products);
      }
    });
  }
  getProductById(productId): Promise<Product> {
    return new Promise((resolve) => {
      this.getProducts().then((products) => {
        resolve(products.find((product) => {
          return product.id == productId;
        }))
      })
    });
  }
}
