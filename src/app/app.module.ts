import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchPipe } from './shared/pips/search/search.pipe';
import { ApiPrefixInterceptor } from './layout/interceptors/api-prefix.interceptors';
import { BearingCatalougeService } from './shared/services/api/bearingCatalouge.service';
import { AppLoaderComponent } from './layout/app-loader/app-loader.component';
import { MaterialModule } from './shared/material.module';
@NgModule({
  declarations: [AppComponent,AppLoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    BearingCatalougeService
    ,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ApiPrefixInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
