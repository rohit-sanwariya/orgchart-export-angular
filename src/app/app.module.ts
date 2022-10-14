import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrgchartModule } from "@dabeng/ng-orgchart";
import { NgxOrgChartModule } from 'ngx-org-chart';
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    OrgchartModule,
    NgxOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
