import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//page components
import { AppComponent } from './app.component';

//shared components
import { ModalsComponent } from './components/shared/modals/modals.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/shared/main/main.component';
import { LoginComponent } from './components/authentication/login/login.component';


const APP_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'login', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component:  LoginComponent,
  children: [  
    /*
    { path: 'comunidades', component: ComunidadesComponent },
    { path: 'comunidad/:id', component: ComunidadDetalleComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'publicaciones' }*/
  ]
}]/*
 */


@NgModule({
  declarations: [
    AppComponent,
    ModalsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
