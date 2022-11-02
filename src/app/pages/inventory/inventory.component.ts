import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InventoryService } from 'src/app/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent {
  @Input() public inventoryJson$ = new Observable<unknown>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
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
      /*
      this.store
        .select(commonSelectors.token)
        .pipe(take(1))
        .subscribe(token => {          
        });
        */

      const type: number = this.inventoryForm.value.type;
      const pageSize: number = this.inventoryForm.value.pageSize;
      const stock: number = this.inventoryForm.value.stock;
      const code: string = this.inventoryForm.value.code;

      this.inventoryJson$ = this.inventryService.fetchInventory(
        type,
        pageSize,
        stock,
        code
      );
    }
  }
}
