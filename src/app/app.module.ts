import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ContactmanagerModule} from './contactmanager/contactmanager.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactmanagerAppComponent } from './contactmanager/contactmanager-app.component';
import { ToolbarComponent } from './contactmanager/components/toolbar/toolbar.component';

const routes: Routes = [
  { path: 'contactmanager', loadChildren: ()=> import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule)},
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: '**', redirectTo: 'contactmanager' }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }