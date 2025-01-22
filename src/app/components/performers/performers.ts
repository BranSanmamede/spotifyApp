import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utilService';
import { Performer } from '../../interfaces/performer';

@Component({
    selector: 'app-performers',
    standalone: false,
    templateUrl: './performers.html'
})
export class PerformersComponent implements OnInit{
    
    performers: Performer[] = [];
    
    constructor(private utilService: UtilService, private router: Router) {}
    
    ngOnInit() {
        this.performers = this.utilService.getPerformers();
    }
    
    verHeroe(id:number) {
        this.router.navigate(['/performer', id]);
    }
}