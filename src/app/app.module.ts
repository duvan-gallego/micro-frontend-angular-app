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
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const { injector } = this;
    // create custom elements from angular components
    const btn = createCustomElement(ButtonComponent, { injector });
    // define in browser registry
    customElements.define('angular-app', btn);
  }

}
