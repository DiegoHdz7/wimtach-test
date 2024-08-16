import { Component,OnInit } from '@angular/core';
import { AddProductFormComponent } from "../add-product-form/add-product-form.component";
import { StateService } from '../../services/state.service';
import { Product,defaultProduct } from '../../Models/ProducModel';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [AddProductFormComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {

  product:Product=defaultProduct
  constructor(private stateService:StateService){

  }

  ngOnInit(){
    this.stateService.selectedProduct$.subscribe((productState)=>{
      this.product = productState
    })
    console.log('selectedProd',this.product)

   }

}
