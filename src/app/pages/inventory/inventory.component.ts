import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { concat, Observable, of } from 'rxjs';
import { InventoryService } from 'src/app/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent {
  @Input() public inventoryJson$: Observable<unknown> = of({});

  constructor(
    private fb: FormBuilder,
    private inventryService: InventoryService
  ) { }

  inventoryForm: FormGroup = this.fb.group({
    type: new FormControl('2'),
    pageSize: new FormControl('10'),
    stock: new FormControl('8'),
    code: new FormControl('2'),
  });

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      const type: number = this.inventoryForm.value.type;
      const pageSize: number = this.inventoryForm.value.pageSize;
      const stock: number = this.inventoryForm.value.stock;
      const code: string = this.inventoryForm.value.code;

      this.inventoryJson$ = concat(
        of({}),
        this.inventryService.fetchInventory(type, pageSize, stock, code));
    }
  }
}
