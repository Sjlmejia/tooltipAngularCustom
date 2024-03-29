import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { CustomTooltipDirective } from './custom-tooltip/custom-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipComponent,
    CustomTooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
