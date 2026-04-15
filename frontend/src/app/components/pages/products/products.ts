import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
    private productsService = inject(ProductsService);
    userData: any[] = [];

    ngOnInit(): void {
        this.productsService.getProducts().subscribe((res: any) => {
            this.userData = res.data;
            console.log("Usuarios:", this.userData);
        });
    }
}
