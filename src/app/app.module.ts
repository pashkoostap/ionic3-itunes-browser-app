import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http/';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { PreviewPage } from '../pages/preview/preview';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ArtistPage } from '../pages/artist/artist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItunesProvider } from '../providers/itunes/itunes';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SettingsPage,
    PreviewPage,
    ContactUsPage,
    ArtistPage
  ],
  imports: [BrowserModule, JsonpModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SettingsPage,
    PreviewPage,
    ContactUsPage,
    ArtistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ItunesProvider
  ]
})
export class AppModule {}
