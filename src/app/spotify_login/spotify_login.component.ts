
import { Component, OnInit } from '@angular/core';
import { AuthService, ScopesBuilder, AuthConfig, TokenService } from 'spotify-auth';
import { Router } from '@angular/router';
import { UserService, AuthenticationService, InternalSpotifyService } from '@/_services';


// @Component({
//   selector: 'app-login',
//   template: `
//   <span>Login with</span>
//   <div class="img-container">
//     <img src="assets/spotify.png" (click)="login()" />
//   </div>`,
//   styleUrls: ['./spotify_login.component.css']
// })
@Component({ templateUrl: 'spotify_login.component.html' })

export class SpotifyLoginComponent implements OnInit {
  
  constructor(
      private authService: AuthService, 
      private spotifyService : InternalSpotifyService,
      private tokenSvc: TokenService, 
      private router: Router
      ) { }
  
  ngOnInit() {
      this.spotifyService.login().subscribe((data: any[])=> {
        console.log("GET DATA:",data)

      })
      // if(!!this.tokenSvc.oAuthToken){
      //   this.router.navigate(['user']);
      // }
    }

   
  
  // public login(): void {
  //     const scopes = new ScopesBuilder()/* .withScopes(ScopesBuilder.LIBRARY) */.build();
  //     const ac: AuthConfig = {
  //       client_id: "09fcb08d88f34e5d9627564dd95c3d93",  // WebPortal App Id. Shoud be config
  //       response_type: "token",
  //       redirect_uri: "http://localhost:8080/authorized",  // My URL
  //       state: "",
  //       show_dialog: true,
  //       scope: 'user-read-private user-read-email user-read-playback-state user-read-recently-played'
  //     };
  //     this.authService.configure(ac).authorize();
  //   }
}