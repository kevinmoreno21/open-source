import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'//1ro a mano
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../model/product';
import { API_URL_ROUTES } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_SERVICES = "http://localhost:8080";
  private urlBase = this.URL_SERVICES + "/api/";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});


  constructor(private http: HttpClient) { }

  getProductList() : Observable<any> {
    console.log("Llamando a REST:"+ this.urlBase + API_URL_ROUTES.products);
    return this.http.get(this.urlBase+API_URL_ROUTES.products).pipe(
      map(response => response as Product[])
    );
  }

  createProduct(product:Object) : Observable<Object>{
    return this.http.post(this.urlBase+API_URL_ROUTES.products, product,
    {headers:this.httpHeaders});
  }

  getProductDetail(codigo: number): Observable<Product> {
    return this.http.get<Product>(this.urlBase+ API_URL_ROUTES.products+ '/' + codigo);
  }

  updateProduct(product:Object) : Observable<Object>{
    return this.http.put(this.urlBase+API_URL_ROUTES.products, product,
    {headers:this.httpHeaders});
  }

  deteleProduct(codigo:number) : Observable<Object>{
    return this.http.delete(this.urlBase+API_URL_ROUTES.products+'/'+codigo,
    {headers:this.httpHeaders});
  }

}
