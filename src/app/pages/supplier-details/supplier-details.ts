import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../services/supplier';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.html'
})
export class SupplierDetailsComponent implements OnInit {

  supplier: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.supplier = this.supplierService.getSupplierById(id);
  }

  save() {
    this.supplierService.updateSupplier(this.supplier);
    this.router.navigate(['/suppliers']);
  }

  back() {
    this.router.navigate(['/suppliers']);
  }
}