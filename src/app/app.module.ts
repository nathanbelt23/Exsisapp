import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NoticiasService } from './services/noticias.service';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app-reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    
    SharedModule,
    StoreModule.forRoot(appReducers),
  StoreDevtoolsModule.instrument(
   {
     maxAge: 25,
     logOnly: environment.production
   }
 ),
 EffectsModule,
 EffectsModule.forRoot(EffectsArray),
 StoreDevtoolsModule.instrument(
  {
    maxAge: 25,
    logOnly: environment.production
  }
 )


  //EffectsModule.forRoot(EffectsArray),
    /*StoreDevtoolsModule.instrument(
   {
     maxAge: 25,
     logOnly: environment.production
   }
 )*/

  ],
  providers: [
    NoticiasService

  ]

  , bootstrap: [AppComponent]
})
export class AppModule { }
