import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public queryString:string = "";
  public queryPath:string = "";
  public queryResult:any = "";

  constructor(private http: HttpClient) { }

  async query(){

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", "Basic " + process.env["PASSENCODE"]) //ZGVtbzpkZW1v");

    const holdval = await this.http.post(process.env["BASE_URL"] + this.queryPath, this.queryString, { headers });
    this.queryResult = holdval;
  }
}
