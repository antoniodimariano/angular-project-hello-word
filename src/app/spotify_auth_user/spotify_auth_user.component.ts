import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService, AuthenticationService, InternalSpotifyService } from '@/_services';
import { isEmpty } from 'lodash';
import { TokenService } from 'spotify-auth';
import { take } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { empty } from 'rxjs';
import { Subscription } from 'rxjs';

// @Component({
//   selector: 'user-info',
//   template: `
//     <div *ngIf="hasUser()">
//       <pre>{{jUser}}</pre>
//     </div>
//   `,
//   styles: [``]
// })
// //@Component({ templateUrl: 'spotify_auth_user.component.html' })

// export class AuthorizedSpotifyUser implements OnInit , OnDestroy{
 
//   public constructor(private infoSvc: InternalSpotifyService, private tokenSvc: TokenService){}
  
//   private stream: Subscription | null = null;
  
//   ngOnDestroy(): void {
//     if(this.stream){
//       this.stream.unsubscribe();
//     }
//   }
//   ngOnInit(): void {
   
//     const stream = this.tokenSvc.authTokens.pipe(switchMap((x) => {
//         return this.infoSvc.fetchUserInfo();
//     }));
//     this.stream = stream.subscribe((x) => this.user = x);
//   }


//   public user: {} = {};

//   public hasUser(): boolean{
//     console.log("THIS USER:",this.user)
    
//     return !isEmpty(this.user);
//   }

//   public get jUser(): {} {
//     return JSON.stringify(this.user, null, 2);
//   }
// }