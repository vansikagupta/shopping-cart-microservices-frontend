import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct } from '../cart-product/cart.product.model';

@Injectable({providedIn: 'root'})
export class HttpClientService{

    constructor(private httpClient:HttpClient){

    }

    getCartProducts(userId : string)
    {
        return this.httpClient.get<CartProduct[]>('http://localhost:8091/catalog/'+userId);
    }

}