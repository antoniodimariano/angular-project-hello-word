import { Injectable } from '@angular/core';
import { Observable, throwError,of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
//import  'rxjs/add/operator/map';
 
//import { SpotifyService } from 'angular2-spotify/angular2-spotify';


@Injectable()
export class InternalSpotifyService {

  private apiUserUrl: string = 'https://api.spotify.com/v1/me';
  private apiAlbumsUrl: string = 'https://api.spotify.com/v1/me/albums';

  private user: {} ;
  private userId : any;
  //private user$: BehaviorSubject<{}>;
  private accessToken : any;
  private tokenType: string;
  client_id ="";
  client_secret = "";

  constructor(
    private http: HttpClient,
    //private spotifyService : SpotifyService,
    private router: Router) {
    //this.user$ = new BehaviorSubject<{}>(this.user);
  }

  // public fetchUserInfo(): Observable<{}> {
  //   console.log("FETCH USER INFO ")
  //   return this.http.get(this.apiUserUrl).pipe(
  //     tap((user: {}) => {
  //       this.user$.next(this.user); 
  //     }),
  //     catchError(this.handleError('getSelf'))
  //   );
  // }
   
//   getUser() {
//     this.spotifyService.getCurrentUser().subscribe(data => {
//         console.log(data);
//         this.user = data;
//         this.userId = data.id;
//     }, err=> { console.log(err); });
// }

//   login() {
//     this.spotifyService.login().subscribe(
//         token => {
//             console.log("TOKEN:",token);
//             this.getUser();
//         },
//         err => console.error(err),
//         () => { });
//   }



  // public login() {
  //     let authorizationTokenUrl = 'https://accounts.spotify.com/api/token';
  //     //let authorizationTokenUrl = `/api/token`;
  
  //     let headers = new HttpHeaders();
  //     headers.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
  //     headers.append('Content-Type', 'application/x-www-form-urlencoded;');
  
  //     //let options = new RequestOptions({ headers: header });
  //     //let options = {headers: header}
  //     let body = 'grant_type=client_credentials';
  
  //     console.log("LOGIN WITH ",headers)
  //     return this.http.post(authorizationTokenUrl, body, {headers:headers})

  //       .map(data => data)
        
  //       // .do(token => {
  //       //   console.log("TOKEN:",token)
  //       //   //this.accessToken = token.access_token;
  //       //   //this.tokenType = token.token_type;
  //       // }, error => console.log(error));
    
  // }


  // public fetchUserAlbums(): Observable<{}>{
  //   return this.http.get(this.apiAlbumsUrl).pipe(
  //     tap((user: {}) => {
  //       this.user$.next(this.user); 
  //     }),
  //     catchError(this.handleError('getSelfAlbums'))
  //   );
  // }

  // public getUserStream(): Observable<{}> {
  //   return this.user$.asObservable();
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     (result as any) = error;
  //     return of(result as T);
  //   };
  // }


   public login(): any {
    var redirect_uri = 'http://localhost:8080/callback'
    var scopes = 'user-read-private user-read-email user-read-playback-state user-read-recently-played'
     return this.http.get("https://accounts.spotify.com/authorize" +
     '?response_type=code' +
     '&client_id=' + this.client_id +
     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
     '&redirect_uri=' + encodeURIComponent(redirect_uri))
   }

   public callback(): any {
    let authorizationTokenUrl = 'https://accounts.spotify.com/api/token';
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    headers.append('Content-Type', 'json');
    let body = 'grant_type=client_credentials';
    return this.http.post(authorizationTokenUrl, body, {headers:headers})
   }


}