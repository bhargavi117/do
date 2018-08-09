import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AppComponent } from './app.component';
import { ToService } from './service/to.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2Webstorage
  ],
  providers: [
    ToService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
