import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { InventoryActions } from 'src/app/store/inventory/actions/inventory.action';
import { inventorySelectors } from 'src/app/store/inventory/selectors/inventory.selectors';
import { InventoryRequest } from '../../shared/services/models/inventory.request';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent implements OnDestroy {
  @Input() public inventory: unknown = {};

  readonly subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.subscription.add(
      this.store
        .select(inventorySelectors.inventory)
        .pipe()
        .subscribe(inventory => this.inventory = inventory));
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
        include: ['account', 'model', 'service']
      };

      this.store.dispatch(
        InventoryActions.getInventory({
          payload: {
            request: request
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
