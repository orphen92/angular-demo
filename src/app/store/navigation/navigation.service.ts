import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "@app/models/backend";
import { Observable } from "rxjs";

@Injectable()
export class NavigationService {
  url = "datas/subnav.json";
  constructor(private http: HttpClient) {

  }

  getCategories(): Observable<Category> {
    return this.http.get<Category>(this.url);
  }
}
