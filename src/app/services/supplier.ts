import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers = [
    { id: 1, name: 'ABC Corp', contact: 'John Doe', email: 'john@abc.com' },
    { id: 2, name: 'XYZ Ltd', contact: 'Jane Smith', email: 'jane@xyz.com' },
    { id: 3, name: 'TechSource', contact: 'Mark Lee', email: 'mark@tech.com' },
    { id: 4, name: 'SupplyHub', contact: 'Anna Cruz', email: 'anna@supply.com' },
    { id: 5, name: 'GlobalTrade', contact: 'Paul Kim', email: 'paul@global.com' },
    { id: 6, name: 'EcoGoods', contact: 'Sara Lim', email: 'sara@eco.com' },
    { id: 7, name: 'PrimeParts', contact: 'Chris Tan', email: 'chris@prime.com' },
    { id: 8, name: 'NextGen', contact: 'Liam Wong', email: 'liam@next.com' },
    { id: 9, name: 'UrbanSupply', contact: 'Mia Chen', email: 'mia@urban.com' },
    { id: 10, name: 'MegaCorp', contact: 'Noah Reyes', email: 'noah@mega.com' }
  ];

  getSuppliers() {
    return this.suppliers;
  }

  getSupplierById(id: number) {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: any) {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = updatedSupplier;
    }
  }
}