import { createReducer, on } from '@ngrx/store';
import { InventoryActions } from '../actions/inventory.action';
import { inventoryAdapter } from '../inventory.adapter';
import { inventoryInitialState, InventoryState } from '../inventory.state';

export const inventoryReducers = createReducer(
  inventoryInitialState,

  on(
    InventoryActions.getInventorySuccess,
    (state, { payload }): InventoryState =>
      inventoryAdapter.setAll(payload.model, { ...state, error: '' })
  ),

  on(
    InventoryActions.getInventoryError,
    (state, { payload }): InventoryState => ({
      ...state,
      error: payload.error,
    })
  )
);
