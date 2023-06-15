import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './foo/list/list.component';
import { DetailComponent } from './foo/detail/detail.component';
import { CreateComponent } from './foo/create/create.component';
import { UpdateComponent } from './foo/update/update.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080/foo'],
          sendAccessToken: true
      }
  }),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
