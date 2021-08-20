import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparatorService {

  constructor(private http: HttpClient) { }

  postConnection(data: any) : Observable<object>
  {
    //access httpClient
    //import httpClientModule in app.module.ts
    console.log(data);
    return this.http.post("http://localhost:8081/login", data);

  }

  postSchema(data: any) : Observable<object>{
    console.log(data);
    return this.http.post("http://localhost:8081/schema",data);

  }

  postDdl(data: any) : Observable<object>{
    console.log(data);
    return this.http.post("http://localhost:8081/ddl",data);
  }

  postDml(data: any) : Observable<object>{
    console.log(data);
    return this.http.post("http://localhost:8081/dml", data);
  }

}
