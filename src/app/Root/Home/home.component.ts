import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
/**
 * Created by practicante on 30/08/17.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    providers: [ScrollToService],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'home';
    constructor(private scrollService: ScrollToService) { }
}

/**
 * Created by practicante on 30/08/17.
 */
