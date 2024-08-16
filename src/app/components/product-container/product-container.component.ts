import { Component,Input,Output,EventEmitter} from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { defaultProduct, Product } from '../../Models/ProducModel';
import { NgFor} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { StateService } from '../../services/state.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [ProductComponent,NgxPaginationModule,NgFor,CommonModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {
  
  @Input() filteredProducts:Product[]=[];
  @Input() currentPage=1;
  @Input() itemsPerPage=3;
  page=1;
  @Output() pageChange = new EventEmitter<number>();
  products:Product[]=[]
  hoveredProduct:Product| null = null

 
   constructor(public stateService:StateService, private router:Router){

   }

   ngOnInit(){
    this.stateService.products$.subscribe((productsState)=>{
      this.filteredProducts = productsState
      this.products = productsState
      console.log('ProductContainerComponent products updated:', this.filteredProducts); 
    })

   }

  
  

  
  onPageChange(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page); // Emit the page change to the parent
  }

  onProductClick(product:Product){
    this.stateService.setSelectedProduct(product)
    this.router.navigate(['update-product'])

  }

  onProductMouseEnter(product:Product){
    this.hoveredProduct = product;
    console.log('Mouse Entered')
  }

  onProductMouseLeave(product: Product) {
    this.hoveredProduct = null;
    console.log('Mouse left')
  }


  

}
