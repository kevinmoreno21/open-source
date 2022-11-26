import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/model/product';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  this.reloadData()
  }
  reloadData(){
    console.log("Reload!");
    this.productService.getProductList().subscribe(products => this.products=products);
  }

  onDelete(product: Product){

    if (confirm(`¿Estás seguro que deas eliminar el producto ${product.descripcion}?`)) {
      console.log("delete");
      this.deleteProduct(product.codigo)
    }else{
      console.log('delete cancelled');
    }
  }
  deleteProduct(codigo: number){
    this.productService.deteleProduct(codigo).subscribe({
      next: (response)=>{
        console.log(response);
        this.reloadData();
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
