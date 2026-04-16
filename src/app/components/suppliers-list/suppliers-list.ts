import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../../services/supplier';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers-list.html'
})
export class SuppliersList {

  suppliers: any[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit() {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplierDetails(id: number) {
    this.router.navigate(['/suppliers', id]);
  }
}