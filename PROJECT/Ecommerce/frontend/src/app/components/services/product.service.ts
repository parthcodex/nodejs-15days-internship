import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environments/environment";


import {ProductModelServer, serverResponse} from "../../models/product.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) {
  }

  getAllProducts(limitOfResults=10): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + 'products/' + id);
  }



}

