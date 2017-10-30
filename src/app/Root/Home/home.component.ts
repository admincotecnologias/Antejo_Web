import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    providers: [ScrollToService],
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
    title = 'home';
    constructor(private scrollService: ScrollToService) { }
    ngOnInit() {
        setTimeout(0, uh => {
            jQuery(document).ready(derp2 => {
                const navBarLoader = jQuery('body').data('nav');
                console.log(navBarLoader);
                navBarLoader.loadNavBar();
            });
        })
    }
    ngAfterViewInit() {
    }
}

/**
 * Created by practicante on 30/08/17.
 */
