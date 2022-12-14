import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { InventoryRequest } from './models/inventory.request';
import { InventoryModel } from '../../store/inventory/models/inventory.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private httpClient: HttpClient) { }

  fetchInventory(request: InventoryRequest): Observable<InventoryModel[]> {
    let requestPath = '/auth/resource/inventory/item';
    requestPath += `?code=${request.code}`;
    requestPath += `&location=${request.location}`;
    requestPath += `&pagenum=${request.pageNum}`;
    requestPath += `&pagesize=${request.pageSize}`;
    requestPath += `&status=${request.status}`;
    requestPath += `&stock=${request.stock}`;
    requestPath += request.include.reduce((p, c) => p += `&include=${c}`, '');

    const inventoryUrl = environment.inventoryDomainUrl + requestPath;

    return this.httpClient
      .get<InventoryModel[]>(inventoryUrl)
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
