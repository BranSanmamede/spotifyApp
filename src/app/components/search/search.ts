import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Song } from '../../interfaces/song';
import { Performer } from '../../interfaces/performer';
import { Album } from '../../interfaces/album';

@Component({
    selector: 'app-search',
    standalone: false,
    templateUrl: './search.html'
})
export class SearchComponent implements OnInit{
    
    type!: string;
    songs!: Song[];
    performers!: Performer[];
    albums!: Album[];
    
    constructor(private activatedRoute: ActivatedRoute, private utilService: UtilService) {}
    
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params=> {
            const query = params['query'];
            this.type = params['type'];
            if(this.type === 'songs') {
                this.songs = this.utilService.findSongs(query);
            }else if(this.type === 'performers') {
                this.performers = this.utilService.findPerformers(query);
            }else if(this.type === 'albums') {
                this.albums = this.utilService.findAlbums(query);
            }else {
                this.songs = this.utilService.findSongs(query);
                this.performers = this.utilService.findPerformers(query);
                this.albums = this.utilService.findAlbums(query);
            }
        });
    }
}