import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categories } from "@app/models/backend";
import { Observable } from "rxjs";

@Injectable()
export class NavigationService {
  url = "datas/subnav.json";
  constructor(private http: HttpClient) {

  }

  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(this.url);
  }
}
