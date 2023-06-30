import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main.component";
import {NgbAccordion, NgbPanel, NgbPanelContent} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbAccordion,
    NgbPanel,
    NgbPanelContent,
    SharedModule,
    RouterModule
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
