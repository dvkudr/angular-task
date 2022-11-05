import { createActionGroup, props } from '@ngrx/store';
import { InventoryRequest } from 'src/app/shared/services/models/inventory.request';
import { InventoryModel } from '../models/inventory.model';

export const InventoryActions = createActionGroup({
  source: 'inventory',
  events: {
    'get inventory': props<{ payload: { request: InventoryRequest } }>(),
    'get inventory success': props<{ payload: { model: InventoryModel[] } }>(),
    'get inventory error': props<{ payload: { error: string } }>(),
  },
});
