import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  providers: [CommonModule,BrowserModule],
  imports: [
    BrowserModule // 🚀 Asegúrate de que está aquí
  ],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const customAppComp = createCustomElement(AppComponent, { injector });
    customElements.define('micro-app', customAppComp);
  }

  ngDoBootstrap(): void {}
}
