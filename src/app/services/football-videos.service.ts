import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballVideosService {
  private apiUrl = 'https://www.scorebat.com/video-api/v1/';

  constructor(private httpClient: HttpClient) {
  }

  getFootballInfosById() {
    return this.httpClient.get(this.apiUrl);
  }
}
