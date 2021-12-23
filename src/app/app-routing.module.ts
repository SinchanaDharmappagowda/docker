import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { QuestionComponent } from './question/question.component';
import { ScriptComponent } from './script/script.component';
import { SqlComponent } from './sql/sql.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"options",component:OptionsComponent},
  {path:"typescript",component:TypescriptComponent},
  {path:"sql",component:SqlComponent},
  {path:"script",component:ScriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
