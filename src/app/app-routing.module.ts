import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InventoryComponent } from './pages/inventory/inventory.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

