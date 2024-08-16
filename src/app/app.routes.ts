import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { GroupedFormComponent } from './components/grouped-form/grouped-form.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

export const routes: Routes = [
    {path:'',component:GroupedFormComponent},
    {path:'home',component:GroupedFormComponent},
    {path:'add-product',component:AddProductFormComponent},
    {path:'update-product',component:UpdateProductComponent}
];
