import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { concat, Observable, of } from 'rxjs';
import { InventoryService } from '../../inventory/inventory.service';
import { InventoryRequest } from '../../shared/services/models/inventory.request';

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
      const request: InventoryRequest = {
        type: this.inventoryForm.value.type,
        location: 'MR_CENTER',
        pageNum: 1,
        pageSize: this.inventoryForm.value.pageSize,
        status: 'available',
        stock: this.inventoryForm.value.stock,
        code: this.inventoryForm.value.code
      };

      this.inventoryJson$ = concat(
        of({}),
        this.inventryService.fetchInventory(request));
    }
  }
}
