import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';

//Interface
import { IListItems } from '../../interface/iListItems.interface';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {

  #cdr = inject(ChangeDetectorRef);
  @ViewChild("inputText") public inputText!: ElementRef;

  @Output() public outputAddListItems = new EventEmitter<IListItems>();

  public focusAndAddItem(value: string) {
    if(value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const currentDate = new Date();
      const timestemp = currentDate.getTime();
      const id = `ID ${timestemp}`

      this.outputAddListItems.emit({
        id,
        checked: false,
        value,
      });
      console.log(
        {id,
        checked: false,
        value,}
      )

      return this.inputText.nativeElement.focus();
    }
  }
}
