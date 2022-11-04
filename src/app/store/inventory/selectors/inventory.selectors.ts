import { createFeatureSelector, createSelector } from '@ngrx/store'
import { inventoryAdapter } from '../inventory.adapter';
import { inventoryFeature, InventoryState } from '../inventory.state'

export const selectInventoryState = createFeatureSelector<InventoryState>(inventoryFeature);

export class InventorySelectors {
    private state = selectInventoryState;

    public inventory = createSelector(this.state, state =>
        inventoryAdapter.getSelectors().selectAll(state)
    );
}

export const inventorySelectors = new InventorySelectors();