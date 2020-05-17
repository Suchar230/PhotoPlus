import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OrderItem } from 'src/app/models/orderItem/order-item';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: OrderItem[];
  price: number;

  constructor(private cartService: CartService, private loginService: LoginService, private modalService: NgbModal, private router: Router, private productService: ProductService) {
    this.cartService.getSummaryPrice().subscribe(value => this.price = value);
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeItem(item: OrderItem) {
    this.cartService.deleteFromCart(item);
  }

  onValueChange(value: number, item: OrderItem) {
    this.cartService.changeQuantity(value, item);
    (document.querySelector(("#input" + item.productCode).toString()) as HTMLInputElement).value = item.quantity.toString();
  };

  buy() {
    if (this.loginService.isLoggedIn() == false) {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.title = "Error occured!";
      modalRef.componentInstance.message = "Please login!";
      return;
    }
    //check if store quantity didn't change, update products
    this.cartService.updateCartAndBuy();
  }

}
