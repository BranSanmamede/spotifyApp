import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Song } from '../../interfaces/song';
import { Performer } from '../../interfaces/performer';

@Component({
  selector: 'app-song',
  standalone: false,
  templateUrl: './song.html'
})
export class SongComponent implements OnInit{
  
  song: Song | undefined;
  performers: Performer[] = [];
  
  constructor(private utilService: UtilService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.song = this.utilService.getSongByID(parseInt(params['id']));
      if(this.song) {
        this.performers = this.song.performers.map(id => this.utilService.getPerformerByID(id)).filter((performer): performer is Performer => performer !== undefined);
      }
    });
  }
}