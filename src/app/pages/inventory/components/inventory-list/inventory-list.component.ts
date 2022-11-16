import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryModel } from '../../../../store/inventory/models/inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryListComponent {
  @Input() public inventoryList$: Observable<InventoryModel[]> | null = null;
}
