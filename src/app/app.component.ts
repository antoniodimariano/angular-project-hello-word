import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { InternalSpotifyService} from './_services';
import { User } from './_models';

import './_content/app.less';
@Component({ selector: 'app', templateUrl: 'app.component.html' })

export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private spotifyAuthenticationService : InternalSpotifyService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    get_spotify_user_info() {
        this.router.navigate(['/user']);
        //this.spotifyAuthenticationService.fetchUserInfo();
    }
    login_with_spotify() {
        this.router.navigate(['/spotify_login']);     
    }
        
}
