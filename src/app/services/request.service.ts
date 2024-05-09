import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  auth = process.env["PASSENCODE"];
  baseURL = process.env["BASE_URL"];

  constructor(private http: HttpClient) { }

  public async postQuery(queryPath:any,postBody:any){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", "Basic " + this.auth) //ZGVtbzpkZW1v

    const returnVal = await this.http.post(this.baseURL + queryPath, postBody, { headers });
    return returnVal;
  }

  public async getQuery(queryPath:any){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", "Basic " + this.auth) //ZGVtbzpkZW1v

    const returnVal = await this.http.get(this.baseURL + queryPath, { headers });
    return returnVal;
  }

}
