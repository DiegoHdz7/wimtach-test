import { Component,OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Product,defaultProduct } from '../../Models/ProducModel';
import { NgFor} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,NgxPaginationModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  pagedProducts:Product[]=[];
  @Input() inputProduct:Product=defaultProduct;
  @Input() currentPage=1;
  @Input() itemsPerPage=5;
  @Input() product:Product=defaultProduct;

  @Output() pageChange = new EventEmitter<number>();

  products:Product[]=[]
   constructor(private stateService:StateService){

   }

   ngOnInit(){
    this.stateService.products$.subscribe((productsState)=>{
      this.products = productsState
      this.pagedProducts = productsState
    })

   }



getProducts():Product[]
{
  return this.products;
}

get getPagedProducts() {
  // Implement the logic for paginated products
  return this.products.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
}

onPageChange(page: number) {
  this.currentPage = page;
  this.pageChange.emit(page); // Emit the page change to the parent
}

onDelete(){
  const id = this.product.id
  this.stateService.deleteProduct(id)
  console.log("Products after delete:",this.stateService.getProducts())

}

}
