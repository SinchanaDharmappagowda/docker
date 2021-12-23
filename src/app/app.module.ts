import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OptionsComponent } from './options/options.component';
import { ChageBgDirective } from './chage-bg.directive';
import { TypescriptComponent } from './typescript/typescript.component';
import { SqlComponent } from './sql/sql.component';
import { ScriptComponent } from './script/script.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    OptionsComponent,
    ChageBgDirective,
    TypescriptComponent,
    SqlComponent,
    ScriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
