import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { IfscCodeService } from 'src/app/shared/services/ifsccode.service';
import { HomeComponent } from './components/home/home.component';
import { BankInfoComponent } from './components/bank-info/bank-info.component';


export function startupServiceFactory(ifscCodeService: IfscCodeService): Function {
  return () => ifscCodeService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    HttpClientModule
  ],

  providers: [IfscCodeService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [IfscCodeService],
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
