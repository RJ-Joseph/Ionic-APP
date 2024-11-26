import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ejemplo, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductListPage implements OnInit {

  products: Ejemplo[] = [];
  errorMessage: string | null = null;  // Para manejar posibles errores

  productsService = inject(ProductsService);

  async ngOnInit() {
    try {
      const response = await this.productsService.getAll();
      this.products = response.ejemplos;
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      this.errorMessage = 'Hubo un problema al cargar los productos. Inténtalo de nuevo más tarde.';
    }
  }
}

