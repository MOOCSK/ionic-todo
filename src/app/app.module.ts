import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { AddItemPage } from '../pages/add-item/add-item';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    MyApp,
    HomePage,
    ItemDetailPage,
    AddItemPage
  ],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailPage,
    AddItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
