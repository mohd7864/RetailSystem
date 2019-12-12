import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() product = { productName:'', productBrand:'', units:'', price:''}
  constructor(public apiService:ApiService, private route:  ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public createProduct(){
    console.log("Products: "+this.product);
    this.apiService.addProduct(this.product).subscribe((result) =>{
       console.log(result);
     }, (err) =>{
       console.log(err);
     });
  }

}
