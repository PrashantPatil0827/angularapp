import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Server1Component } from './server1/server1.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DirectiveassignComponent } from './directiveassign/directiveassign.component';
import { NgassignmentComponent } from './ngassignment/ngassignment.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';
import { ChildassignComponent } from './childassign/childassign.component';
import { OutputassignComponent } from './outputassign/outputassign.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirectassignComponent } from './directassign/directassign.component';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { FormassignmentComponent } from './formassignment/formassignment.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformassignComponent } from './templateformassign/templateformassign.component';


@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent,
    ServersComponent,
    Server1Component,
    DemodirectivesComponent,
    NgswitchComponent,
    DirectiveassignComponent,
    NgassignmentComponent,
    AttriComponent,
    CustdirDirective,
    DemoComponent,
    ChildassignComponent,
    OutputassignComponent,
    HooksComponent,
    DirectassignComponent,
    AddassignmentComponent,
    SimpletemplateformComponent,
    FormassignmentComponent,
    ReactiveformComponent,
    TemplateformassignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
