import { EntityState } from "@ngrx/entity";
import { inventoryAdapter } from "./inventory.adapter";
import { InventoryModel } from "./models/inventory.model";

export const inventoryFeature = 'inventory-feature';

export interface InventoryState extends EntityState<InventoryModel> {
    error: string
}

export const inventoryInitialState: InventoryState = inventoryAdapter.getInitialState({
    error: '',
})