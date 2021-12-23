import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SqlService {

  constructor(private http :HttpClient) { }

  getSqlJson(){
    return this.http.get<any>("assets/sql.json");
  }
}