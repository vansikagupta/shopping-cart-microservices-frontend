import { Component, OnInit, Input } from '@angular/core';
import { CartProduct } from './cart.product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input("product") product : CartProduct;
  constructor() { }

  ngOnInit() {
  }

}
