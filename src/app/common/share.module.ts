import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

@NgModule({
  imports: [
    TranslateModule,
    RouterModule
    // FormsModule,
    // BrowserModule
  ],
  declarations: [
      HeaderComponent,
      FooterComponent,
  ],
  exports: [HeaderComponent, FooterComponent]

})
export class ShareModule { }
