import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

 
  constructor(private http :HttpClient) { }

  getScriptJson(){
    return this.http.get<any>("assets/script.json");
  }
}
