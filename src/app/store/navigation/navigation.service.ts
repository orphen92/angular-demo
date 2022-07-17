import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "@app/models/backend";
import { Observable } from "rxjs";

@Injectable()
export class NavigationService {
  url = "datas/subnav.json";
  constructor(private http: HttpClient) {

  }

  getCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.url);
  }
}
