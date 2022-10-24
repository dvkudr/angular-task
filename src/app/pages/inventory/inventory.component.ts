import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnDestroy {
  readonly subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {}

  inventoryForm: FormGroup = this.fb.group({
    type: new FormControl('2'),
    pageSize: new FormControl('10'),
    stock: new FormControl('8'),
    code: new FormControl('2'),
  });

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      const type = this.inventoryForm.value.type;
      const pageSize = this.inventoryForm.value.pageSize;
      const stock = this.inventoryForm.value.stock;
      const code = this.inventoryForm.value.code;
      console.log(`${type} ${pageSize} ${stock} ${code}`);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

