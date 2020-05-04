import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from '../../models/product/product';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Order } from 'src/app/models/order/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [DatePipe]
})


export class OrderComponent implements OnInit {
  items: [Product, number][];
  price: number;
  order: Order;
  user: any=[];
  paymentMethod: string;
  isChecked: boolean=false;
  error:any;
  myDate=new Date();
  
  constructor(private cartService: CartService,private http: HttpClient,private datePipe: DatePipe) {
    this.cartService.getSummaryPrice().subscribe(value => this.price = value);
    this.order={
      userCode: 0,
      orderStatus: 'PENDING',
      paymentMethod: 'PAYPAL',
      price: 0,
      date: "2020-01-30",
      orderItems: [{productCode: 0,quantity:0, orderCode:'orderCode'}]
    }

  }

  FieldsChange(values:any){
    this.isChecked=true;
    this.paymentMethod=values.target.value
    console.log(this.paymentMethod)
    }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items)
    this.items.forEach(element => {
      this.order.orderItems.push({productCode: element[0].code,quantity:element[1],orderCode:'orderCode'})
    });
    this.order.orderItems.splice(0,1)
    console.log(this.order)
    this.user=localStorage.getItem("loggedUser")
    this.user=JSON.parse(this.user)
    this.order.userCode=this.user.code
    this.order.price=this.price;
    this.order.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    console.log([this.order])
  }

  buy()
  {

    if(this.isChecked==false)
    { 
      this.error=document.getElementById("error")
      this.error.style.display="block"
      return
    }
    if(this.isChecked==true)
    { 
      this.error=document.getElementById("error")
      this.error.style.display="none"
    }
    this.order.paymentMethod=this.paymentMethod
    
    this.http.post<HttpResponse<Order[]>>('http://localhost:8090/order/buy',  
     [this.order]
    ).subscribe(res => {})

  }

}
