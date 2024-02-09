import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpReqsService {


  constructor(private http: HttpClient) { }

  public get(endpoint: string) {
    return this.http.get<any>(environment.api + endpoint);
  }

  public post(endpoint: string, data: any) {
    return this.http.post(environment.api + endpoint, data);
  }

  public put(endpoint: string, data: any) {
    return this.http.put(environment.api + endpoint, data);
  }

  public delete(endpoint: string, id: any) {
    return this.http.delete(environment.api + endpoint + "/" + id);
  }
}
