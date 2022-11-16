import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InventoryActions } from '../../store/inventory/actions/inventory.action';
import { inventorySelectors } from '../../store/inventory/selectors/inventory.selectors';
import { InventoryRequest } from '../../shared/services/models/inventory.request';
import { InventoryModel } from 'src/app/store/inventory/models/inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent {
  inventoryList$: Observable<InventoryModel[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.inventoryList$ = this.store.select(inventorySelectors.inventory);
  }

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
        code: this.inventoryForm.value.code,
        include: ['account', 'model', 'service'],
      };

      this.store.dispatch(
        InventoryActions.getInventory({
          payload: {
            request: request,
          },
        })
      );
    }
  }
}
