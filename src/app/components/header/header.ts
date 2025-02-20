import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.html'
})
export class HeaderComponent {
    
    constructor(private router: Router) {}

    onSearch(query: String, type: string) {
        this.router.navigate(['/search'], {queryParams: {query: query, type: type}});
    }
}