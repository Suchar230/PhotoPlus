import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/order/order';
import { DatePipe } from '@angular/common';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { OrderService } from 'src/app/services/order/order.service';
import { AddressService } from 'src/app/services/address/address.service';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderItem } from 'src/app/models/orderItem/order-item';
import { Address } from 'src/app/models/address/address';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [DatePipe]
})


export class OrderComponent implements OnInit {
  items: OrderItem[];
  price: number;
  order: Order = new Order();
  paymentMethod: string;
  isChecked: boolean = false;
  myDate = new Date();
  addreses: any[] = new Array();
  selectedOption: any;
  addressForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private addressService: AddressService, private cartService: CartService, private orderSerivce: OrderService, private http: HttpClient, private datePipe: DatePipe, private modalService: NgbModal, private loginService: LoginService) {
    this.cartService.getSummaryPrice().subscribe(value => this.price = value);
    this.order.orderItems = new Array();
    this.order.address = new Address();
  }

  selectOption(id: any) {
    this.selectedOption = id;
    this.order.address.city = this.addreses[this.selectedOption].city
    this.order.address.countryCode = this.addreses[this.selectedOption].country
    this.order.address.number = this.addreses[this.selectedOption].number
    this.order.address.street = this.addreses[this.selectedOption].street
    this.order.address.userCode = this.addreses[this.selectedOption].userCode
    this.order.address.zipCode = this.addreses[this.selectedOption].zipCode
    this.order.addressCode = this.addreses[this.selectedOption].code
  }

  FieldsChange(values: any) {
    this.isChecked = true;
    this.paymentMethod = values.target.value
  }


  ngOnInit(): void {

    this.addressForm = this.formBuilder.group({
      code: ['0'],
      links: [[]],
      userCode: [''],
      street: ['', [Validators.required, Validators.minLength(4)]],
      number: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      country: ['', [Validators.required]],
    })
    if (this.loginService.isLoggedIn() == true) {
      this.order.userCode = this.loginService.getLoggedUser().code
      this.addressService.byUser(this.order.userCode).subscribe((data: any) => {
        console.log(data)
        let i = 0;
        data.forEach(element => {
          element.key = i;
          i++
        });
        this.addreses = data.reverse();
        if (this.addreses.length > 0) {
          let display = document.getElementById("display");
          display.style.display = "block";
          this.selectOption(0);
        }
      })
    }
    this.items = this.cartService.getItems();
    this.items.forEach(element => {
      this.order.orderItems.push(element);
    });
    this.order.orderItems.splice(0, 1)
    this.order.price = this.price;
    this.order.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  get f() { return this.addressForm.controls; }

  addresBuy() {
    this.submitted = true;
    if (this.addressForm.invalid) {
      return;
    }
    if (this.loginService.isLoggedIn() == false) {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.title = "Error occured!";
      modalRef.componentInstance.message = "Please login!.";
      return;
    }
    if (this.isChecked == false) {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.title = "Error occured!";
      modalRef.componentInstance.message = "Please check payment method!.";
      return
    }
    const alias = this.addressForm.value
    this.order.address.street = alias.street
    this.order.address.number = alias.number
    this.order.address.city = alias.city
    this.order.address.zipCode = alias.zipCode
    this.order.address.countryCode = alias.country
    this.order.paymentMethod = this.paymentMethod
    this.order.address.userCode = this.loginService.getLoggedUser().code
    alias.userCode = this.order.address.userCode;
    this.addressService.post(alias)
      .subscribe(res => {
        this.addressService.getSingle(res.headers.get('location').substring(30)).subscribe(data => {
          this.order.addressCode = data.code
          this.orderSerivce.buy(this.order).subscribe(data => {
            const modalRef = this.modalService.open(SuccessModalComponent);
            modalRef.componentInstance.title = "Success";
            modalRef.componentInstance.message = "Your order completed.";
            this.router.navigate(['/products']);
          }, error => {
            this.router.navigate(['/cart'])
          })
        })
      })
  }

  buy() {
    if (this.loginService.isLoggedIn() == false) {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.title = "Error occured!";
      modalRef.componentInstance.message = "Please login!.";
      return;
    }

    if (this.isChecked == false) {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.title = "Error occured!";
      modalRef.componentInstance.message = "Please choose your payment method.";
      return
    }

    this.order.paymentMethod = this.paymentMethod
    this.orderSerivce.buy(this.order).subscribe(data => {
      const modalRef = this.modalService.open(SuccessModalComponent);
      modalRef.componentInstance.title = "Success";
      modalRef.componentInstance.message = "Your order completed.";
      this.router.navigate(['/products']);
    }
    )
  }

}
