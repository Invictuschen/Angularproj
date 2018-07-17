import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { XcomponentComponent } from './xcomponent/xcomponent.component';
import { XService } from './x.service';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { NewComponent } from './new/new.component';
import { SummaryPipe } from './summary.pipe';
import { Ass1gnComponent } from './ass1gn/ass1gn.component';
import { Ass2gnComponent } from './ass2gn/ass2gn.component';
import {HeroFormReactiveComponent} from './reactive/hero-form-reactive.component';
import {HeroFormTemplateComponent} from './template/hero-form-template.component';
import {ForbiddenValidatorDirective} from './shared/forbidden-name.directive';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
@NgModule({
  declarations: [
    AppComponent,
    XcomponentComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    NewComponent,
    SummaryPipe,
    Ass1gnComponent,
    Ass2gnComponent,
    HeroFormReactiveComponent,
    HeroFormTemplateComponent,
    ForbiddenValidatorDirective,
    FormcontrolComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [XService],
  bootstrap: [AppComponent]
})
export class AppModule { }
