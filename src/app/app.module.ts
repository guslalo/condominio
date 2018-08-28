//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modulos
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//pages components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

//authentication
import { LoginComponent } from './components/authentication/login/login.component';
import { AuthGuard } from './components/authentication/auth.guard';

//shared components
import { ModalsComponent } from './components/shared/modals/modals.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/shared/main/main.component';


const appRoutes: Routes = [
  {
    path: '', component: LoginComponent
  },
  //{ path: 'login', pathMatch: 'full', redirectTo: 'login' },
  //{ path: 'dashboard', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component:  MainComponent,
    children: [  
      { path: '', component: DashboardComponent },
      /*{ path: 'comunidad/:id', component: ComunidadDetalleComponent },

      { path: '**', pathMatch: 'full', redirectTo: 'publicaciones' } */
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
    LoginComponent,
    DashboardComponent
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
