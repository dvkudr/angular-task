import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { InventoryService } from '../../../inventory/inventory.service';
import { InventoryActions } from '../actions/inventory.action';
import { InventoryModel } from '../models/inventory.model';

@Injectable()
export class InventoryEffects {
  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService
  ) { }

  fetchInventory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InventoryActions.getInventory),
      switchMap(({ payload }) => this.inventoryService.fetchInventory(payload.request)),
      map((result: InventoryModel[]) =>
        InventoryActions.getInventorySuccess({ payload: { model: result } })
      ),
      catchError((error: Error) =>
        of(
          InventoryActions.getInventoryError({
            payload: { error: error.message },
          })
        )
      )
    );
  });
}
