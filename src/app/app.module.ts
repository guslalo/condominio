import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//page components
import { AppComponent } from './app.component';


import { AuthGuard } from './components/authentication/auth.guard';

//shared components
import { ModalsComponent } from './components/shared/modals/modals.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/shared/main/main.component';
import { LoginComponent } from './components/authentication/login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'login', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', component:  LoginComponent,
    children: [  
      /*
      { path: 'comunidades', component: ComunidadesComponent },
      { path: 'comunidad/:id', component: ComunidadDetalleComponent },

      { path: '**', pathMatch: 'full', redirectTo: 'publicaciones' }*/
    ]
  }
]

/*
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'DashboardComponent', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'adscreen', component: AdscreenComponent, canActivate: [AuthGuard]},
  { path: 'visor-dispositivos', component: VisorDispositivosComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent }
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false },
    ), 
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
