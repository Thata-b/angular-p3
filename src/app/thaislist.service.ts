import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ThaislistService {
  apiURL = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json";


  constructor(private http: HttpClient) { }

  getDados() {
    return this.http.get(`${this.apiURL}`);
  }

}