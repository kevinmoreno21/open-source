import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { HomeProductComponent } from './components/home-product/home-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path:"list", component:ProductListComponent},
  {path:"detalle/:codigo", component: ProductDetailsComponent},
  {path:"create", component:CreateProductComponent},
  {path:"update/:codigo", component: UpdateProductComponent},
  {path:"home" ,  component: HomeProductComponent},
  {path:'', redirectTo: "/home", pathMatch:'full'},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
