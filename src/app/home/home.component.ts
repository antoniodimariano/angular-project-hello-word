import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
//import { AuthService, ScopesBuilder, AuthConfig, TokenService } from 'spotify-auth';
import { User } from '@/_models';
import { UserService, AuthenticationService, InternalSpotifyService } from '@/_services';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private infoSvc: InternalSpotifyService,
        //private tokenSvc: TokenService,
        //private authService: AuthService,
        private router: Router
        
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
        // this.authService.authorizedStream.pipe(filter( x => x )).subscribe(() => {
        //     this.router.navigate(['user']);
        // });
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}