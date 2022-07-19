import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "@app/models/backend";
import { Observable } from "rxjs";

const url = "datas/subnav.json";

@Injectable()
export class NavigationService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(url);
  }
}
