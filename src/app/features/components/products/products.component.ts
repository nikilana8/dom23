import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient, private productService: ProductService , private router: Router) {
  }

  teas: ProductType[] = [];
  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: data => {
          this.teas = data;
      },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
    })
  }
}
