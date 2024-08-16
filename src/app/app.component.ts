import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NavigationDropDownComponent } from "./components/navigation-drop-down/navigation-drop-down.component";
import { GroupedFormComponent } from "./components/grouped-form/grouped-form.component";
import { ProductComponent } from "./components/product/product.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { Product } from './Models/ProducModel';
import { ProductContainerComponent } from "./components/product-container/product-container.component";
import { UpcFormComponent } from "./components/upc-form/upc-form.component";
import { routes } from './app.routes';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchFormComponent, DropDownListAllModule, NavigationDropDownComponent, GroupedFormComponent, ProductComponent, NgxPaginationModule, ProductContainerComponent, UpcFormComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wimtach-test';
  navigations:string[] = ["nav1", "nav2","nav3"];
  selectedNav:string = "";
  page:number=1


  handleSelectedNav(selectedItem:string){
    this.selectedNav = selectedItem;
    console.log(this.selectedNav);

  }

}
