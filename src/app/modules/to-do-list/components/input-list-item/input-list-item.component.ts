import { Component, EventEmitter, Input, Output } from '@angular/core';

//Interface
import { IListItems } from '../../interface/iListItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {

  @Input({ required: true }) public inputListItems: Array<IListItems> = [];
  
  @Output() public outputUpdateItemChecked = new EventEmitter<{id: string; checked: boolean;}>();

  public UpdateItemCheckbox(id: string, checked: boolean) {
    this.outputUpdateItemChecked.emit({id, checked})
  }
}
