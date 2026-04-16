import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { SuppliersList } from './components/suppliers-list/suppliers-list';
import { SupplierDetails } from './components/supplier-details/supplier-details';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'suppliers', component: SuppliersList },
  { path: 'suppliers/:id', component: SupplierDetails },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];