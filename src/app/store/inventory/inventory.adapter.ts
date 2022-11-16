import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { InventoryModel } from './models/inventory.model';

export const inventoryAdapter: EntityAdapter<InventoryModel> =
  createEntityAdapter<InventoryModel>({
    selectId: ({ code }) => `${code}`,
    sortComparer: false,
  });
