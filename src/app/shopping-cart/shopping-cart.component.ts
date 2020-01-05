import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../cart-product/cart.product.model';
import { HttpClientService } from '../service/httpservice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart : CartProduct[];
  userId : string;

  constructor(private httpClientService:HttpClientService, private route:ActivatedRoute) { 
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.httpClientService.getCartProducts(this.userId).subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
 }

handleSuccessfulResponse(response)
{
   this.cart=response;
}

}
