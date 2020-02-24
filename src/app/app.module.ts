import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor, SpotifyAuthInterceptor2 } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { SpotifyLoginComponent} from './spotify_login'
import { SpotifyAuthModule } from 'spotify-auth';
import { AlertComponent } from './_components';
import { InternalSpotifyService} from './_services'
//import { AuthorizedSpotifyUser} from './spotify_auth_user'
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        SpotifyAuthModule.forRoot(),
       
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        SpotifyLoginComponent,
        //AuthorizedSpotifyUser
    ],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: SpotifyAuthInterceptor2, multi: true },

       { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
       { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        InternalSpotifyService, 
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };