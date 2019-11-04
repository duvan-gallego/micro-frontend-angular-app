import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';
import { Button } from 'protractor';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const btn = createCustomElement(ButtonComponent, { injector })
    customElements.define('angular-app', btn)
  }
  ngDoBootStrap() {

  };
}
