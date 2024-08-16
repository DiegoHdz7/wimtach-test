import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { NavigationDropDownComponent } from "../navigation-drop-down/navigation-drop-down.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-upc-form',
  standalone: true,
  imports: [ReactiveFormsModule, NavigationDropDownComponent,NgFor],
  templateUrl: './upc-form.component.html',
  styleUrl: './upc-form.component.scss'
})
export class UpcFormComponent {
  upcForm:FormGroup;
  navigations:string[] = ["nav1", "nav2","nav3"];
  selectedNav:string = "";
  navComponentSize: number = 15;

  handleSelectedNav(selectedItem:string){
    this.selectedNav = selectedItem;
    console.log(this.selectedNav);

  }

  constructor(){
    this.upcForm = new FormGroup({
      upcText: new FormControl('')
    });
  }

  get upcText(){
    return this.upcForm.get('upcText')?.value;
  }


}
