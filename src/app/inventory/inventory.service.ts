import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { InventoryModel } from './inventory.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private httpClient: HttpClient) {}

  fetchInventory(
    type: number,
    pageSize: number,
    stock: number,
    code: string
  ): Observable<unknown> {
    const requestPath = `/auth/resource/inventory/item?code=${code}&location=MR_CENTER&pagenum=1&pagesize=${pageSize}&status=available&stock=${stock}&type=${type}&include=account&include=model&include=service`;
    const inventoryUrl = environment.inventoryDomainUrl + requestPath;

    return this.httpClient
      .get<unknown>(inventoryUrl)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(
            () =>
              new Error(`${err.error.error} (${err.error.error_description})`)
          )
        )
      );
  }
}
