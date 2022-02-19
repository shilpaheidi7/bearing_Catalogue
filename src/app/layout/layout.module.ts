import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { LayoutRoutingModule } from './layout.routing';
const COMPONENTS = [LayoutComponent, HeaderComponent]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ],
})
export class LayoutModule { }
