import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:9080';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint+'/products',httpOptions).pipe(
      map(this.extractData));
  }

  addProduct (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + '/products', JSON.stringify(product), httpOptions).pipe(
      catchError(this.handleError<any>('addProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

export class Product {
  constructor(public productId: number, public product_name: string, public product_brand: string, public units: number, public price: number) {}
}

export interface ProductResponse {
results: Product[];
}