import { Component,OnInit } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { Product } from '../../Models/ProducModel';
import { UpcFormComponent } from '../upc-form/upc-form.component';
import { ProductComponent } from '../product/product.component';
import { ProductContainerComponent } from "../product-container/product-container.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { StateService } from '../../services/state.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-grouped-form',
  standalone: true,
  imports: [SearchFormComponent, UpcFormComponent, ProductContainerComponent, NgxPaginationModule,CommonModule],
  templateUrl: './grouped-form.component.html',
  styleUrl: './grouped-form.component.scss'
})
export class GroupedFormComponent {

  title = 'wimtach-test';
  navigations:string[] = ["nav1", "nav2","nav3"];
  selectedNav:string = "";
  page:number=1
  pagedProducts:Product[]=[];
  filteredProducts:Product[] = []

  products:Product[]=[]
   constructor(private stateService:StateService){

   }

   ngOnInit():void{
    this.stateService.products$.subscribe((productsState)=>{
      this.products = productsState
      this.pagedProducts = productsState

    })
  
  }

 

  handleSelectedNav(selectedItem:string){
    this.selectedNav = selectedItem;
    console.log(this.selectedNav);

  }


  
  
  getProducts():Product[]
  {
    return this.products;
  }

  onPageChange(page: number) {
    this.page = page;
  }
  handleProductsChange(value: Product[]) {
    console.log('Received value from child:', value);
    this.filteredProducts = value;
    
  }

}
