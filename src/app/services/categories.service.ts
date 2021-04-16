import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../models/category.model';

import { MessageService } from './message.service';

@Injectable()
export class CategoriesService {
  baseUrl = 'https://laravel.smartexweb.kz';
  categoriesUrl = this.baseUrl + '/api/categories';

  constructor(private http: HttpClient) { }

  /** GET all categories from the server */
  getAllCategories() : Observable<Category[]> {
    return this.http.get(this.categoriesUrl).pipe(map(data=>{
        let categoriesArr = data["data"];
        return categoriesArr.map(function(category: Category) {
            return category;
          });
    }));
  }
}
