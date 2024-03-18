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

  @Output() public outputListItems = new EventEmitter<IListItems>();

  public focusAndAddItem(value: string) {
    if(value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const dataAtual = new Date();
      const timestemp = dataAtual.getTime();
      const id = `ID ${timestemp}`

      this.outputListItems.emit({
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
