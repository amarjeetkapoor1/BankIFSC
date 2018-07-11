import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {TooltipModule} from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { IfscCodeService } from 'src/app/shared/services/ifsccode.service';
import { HomeComponent } from './components/home/home.component';
import { BankInfoComponent } from './components/bank-info/bank-info.component';
import { BanksData } from './shared/model/banks-data.model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    TooltipModule
  ],

  providers: [IfscCodeService, BanksData],
  bootstrap: [AppComponent]
})
export class AppModule { }
