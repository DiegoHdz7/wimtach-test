import { Component, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-drop-down.component.html',
  styleUrl: './navigation-drop-down.component.scss'
})
export class NavigationDropDownComponent {
  @Input() items :string[]=[];
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedOption: string='';

  onItemSelected(option:string){
    this.selectedOption=option;
    this.selectionChanged.emit(this.selectedOption)
  }

 

}
