import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Product } from '../../Models/ProducModel';
import { filter } from 'rxjs';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})


export class SearchFormComponent {
  @Output() productsFound = new EventEmitter<Product[]>();

  categories: string[] = [];

  brands: string[] = []
  filteredProducts: Product[] = [];

  brandSelected: string = ""
  categorySelected: string = ""


  products: Product[] = []
  constructor(private stateService: StateService) {

  }

  ngOnInit() {
    this.stateService.products$.subscribe((productsState) => {
      this.products = productsState
      this.brands = this.products.map((product) => { return product.brand })
      this.categories = this.products.map((product) => { return product.category })
    })

  }

  onBrandSelected(option: string) {
    console.log("dropdown clicked")
    this.brandSelected = option;
  }

  onCategorySelected(option: string) {
    console.log("dropdown clicked")
    this.categorySelected = option;
  }

  onSearch() {

    console.log("products",this.products)
    this.filteredProducts = this.products.filter(product => {
      console.log("Brand")
      console.log(product.brand, this.brandSelected);
      console.log(product.brand == this.brandSelected)
      console.log("Category")
      console.log(product.category, this.categorySelected);
      console.log(product.category == this.categorySelected)
      return ((product.brand == this.brandSelected) ||
        (product.category == this.categorySelected));
    });
    console.log('Filtered products',this.filteredProducts)

    this.productsFound.emit(this.filteredProducts);

  }

  onReset() {
    this.filteredProducts = this.products;
    console.log("Filtered",this.filteredProducts)
    console.log("Products",this.products)
    this.productsFound.emit(this.filteredProducts);
  }

 

}
