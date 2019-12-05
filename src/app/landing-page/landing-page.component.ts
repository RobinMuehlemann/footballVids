import { Component, OnInit } from '@angular/core';
import {FootballVideosService} from '../services/football-videos.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private footballService: FootballVideosService) { }

  ngOnInit() {
  }
  public onclick() {
    this.footballService.getFootballInfosById().subscribe(value => console.log(value));
  }
}
