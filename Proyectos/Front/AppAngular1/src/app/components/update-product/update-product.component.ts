import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/model/product';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //capturando el codigo
    const id = this.activateRouter.snapshot.params['codigo'];
    //llamo al servicio enviandole el id para que retorne el producto encontrado
    this.productService.getProductDetail(id).subscribe(data => this.product=data);
  }

  save(){
    console.log(this.product)
    this.productService.updateProduct(this.product).subscribe(
      data => this.router.navigate(['/list'])
    );
  }
}
