import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product,defaultProduct } from '../Models/ProducModel';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products$:Observable<Product[]> = this.productsSubject.asObservable();

  private selectedProductSubject: BehaviorSubject<Product> = new BehaviorSubject<Product>(defaultProduct);
  selectedProduct$:Observable<Product> = this.selectedProductSubject.asObservable();


  constructor() { 
    this.productsSubject.next([
      { id: 1, name: 'Smartphone X', category: 'Electronics', price: 799.99, inStock: true, brand: 'TechCorp', rating: 4.5, discount: 10, releaseDate: '2024-03-15', description: 'Latest model with high-end features.' },
      { id: 2, name: 'Fantasy Novel', category: 'Books', price: 24.99, inStock: true, brand: 'BookWorld', rating: 4.7, discount: 5, releaseDate: '2023-10-01', description: 'An epic tale of magic and adventure.' },
      { id: 3, name: 'Winter Jacket', category: 'Clothing', price: 129.99, inStock: false, brand: 'FashionWear', rating: 4.2, discount: 15, releaseDate: '2023-11-10', description: 'Warm and stylish winter jacket.' },
      { id: 4, name: 'Running Shoes', category: 'Sports', price: 89.99, inStock: true, brand: 'RunFast', rating: 4.6, discount: 20, releaseDate: '2024-01-05', description: 'Comfortable running shoes for all terrains.' },
      { id: 5, name: 'Garden Tools Set', category: 'Home & Garden', price: 149.99, inStock: true, brand: 'GreenThumb', rating: 4.8, discount: 10, releaseDate: '2023-09-20', description: 'Complete set of high-quality garden tools.' },
      { id: 6, name: 'Plush Toy', category: 'Toys', price: 29.99, inStock: true, brand: 'ToyLand', rating: 4.9, discount: 5, releaseDate: '2023-08-15', description: 'Soft and cuddly plush toy for children.' },
      { id: 7, name: 'Car Vacuum Cleaner', category: 'Automotive', price: 59.99, inStock: true, brand: 'CleanDrive', rating: 4.3, discount: 10, releaseDate: '2023-12-01', description: 'Portable vacuum cleaner for car interiors.' },
      { id: 8, name: 'Vitamin Supplement', category: 'Health', price: 39.99, inStock: true, brand: 'HealthBoost', rating: 4.6, discount: 15, releaseDate: '2024-02-20', description: 'Essential vitamins for daily health.' },
      { id: 9, name: 'Face Cream', category: 'Beauty', price: 19.99, inStock: true, brand: 'GlowSkin', rating: 4.7, discount: 5, releaseDate: '2023-11-05', description: 'Nourishing cream for healthy, radiant skin.' },
      { id: 10, name: 'Gold Necklace', category: 'Jewelry', price: 299.99, inStock: false, brand: 'LuxuryJewels', rating: 4.8, discount: 10, releaseDate: '2023-07-25', description: 'Elegant gold necklace with intricate design.' }
    ]);
  }

  getProducts():Observable<Product[]>
  {
    return this.products$;
  }

  updateProducts(products:Product[]):void{
    this.productsSubject.next(products);
    console.log('Products Updated:',this.productsSubject.value)
  }

  addProduct(product:Product){
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next([...currentProducts,product]);
    console.log('State Updated:',this.productsSubject.value)
    
  }
  deleteProduct(productId:number){
    const currentProducts = this.productsSubject.value;
    const newProducts = currentProducts.filter((product)=>productId!==product.id)
  
    this.productsSubject.next(newProducts);
    console.log('State Updated:',this.productsSubject.value)
    
  }

  setSelectedProduct(product:Product){
    this.selectedProductSubject.next(product)
    console.log('SelectedProductState',this.selectedProductSubject.value)

  }
}
