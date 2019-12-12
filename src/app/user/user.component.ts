import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  columnsToDisplay: string[] = ['productId', 'product_name', 'product_brand', 'units', 'price'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public apiService:ApiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getProducts();
  }

  getProducts() {
    this.apiService.getProducts().subscribe(data => {
      console.log("Data: "+data);
      this.dataSource.data = data;
    });
  }

}

export interface Product {
  productId: number;
  product_name: string;
  product_brand: string;
  units: number;
  price: number;
}