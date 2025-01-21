import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Song } from '../../interfaces/song';
import { Performer } from '../../interfaces/performer';

@Component({
  selector: 'app-performer',
  standalone: false,
  templateUrl: './performer.html'
})
export class PerformerComponent implements OnInit{
  
  performer: Performer | undefined;
  
  constructor(private utilService: UtilService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.performer = this.utilService.getPerformerByID(parseInt(params['id']));
    });
  }
}