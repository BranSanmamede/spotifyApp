import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-performer',
    standalone: false,
    templateUrl: './heroes.component.html'
})
export class PerformerComponent implements OnInit{
    
    performers: Performer[] = [];
    
    constructor(private heroesService: HeroeService, private router: Router) {}
    
    ngOnInit() {
        this.heroes = this.heroesService.heroes;
    }
    
    verHeroe(id:number) {
        this.router.navigate(['/heroe', id])
    }
}