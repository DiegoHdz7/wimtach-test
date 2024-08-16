import { Component,OnInit,Input } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { Product,defaultProduct } from '../../Models/ProducModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss'
})
export class AddProductFormComponent {
  productForm:FormGroup;
  products:Product[]=[]
  updatedProducts: Product[]=[]
  newProduct:Product=defaultProduct

  @Input() inputPoduct:Product=defaultProduct;
  title:string=""
  isUpdate:boolean=false;

  inputSpacing:number = 1;



  constructor(private formBuilder:FormBuilder, private stateService:StateService, private router:Router){
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      inStock: [false],
      brand: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      discount: [0, [Validators.min(0), Validators.max(100)]],
      releaseDate: ['', Validators.required],
      description: ['']
    })

   
  }

  ngOnInit(){
    this.stateService.products$.subscribe((productsState)=>{
      this.products = productsState
    })

    if(this.inputPoduct!=defaultProduct)
      {
        this.productForm.patchValue(this.inputPoduct)
        this.title='Update Product'
        this.isUpdate=true
      } else{
        this.title='Add Product'
      }
  }
  onSubmit():void{
    if(this.productForm.valid)
    {
      

      if(this.isUpdate)
      {
        let updatedProduct = {...this.productForm.value,id:this.inputPoduct.id} as Product
        this.updatedProducts= this.products.map(product=>{
          if(product.id== updatedProduct.id )
          {
            return updatedProduct
          } else{
            return product
          }
        })
        
        this.stateService.updateProducts(this.updatedProducts)
    

      } else{
        let newId = this.products.length+1
        this.newProduct = {...this.productForm.value,id:newId}
        console.log('New Product', this.newProduct);
        this.stateService.addProduct(this.newProduct)
      }

      this.router.navigate(['home'])
     
    } else {
      console.log('Form is invalid');
    }

  }



}
