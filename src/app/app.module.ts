import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { EmpresasComponent } from './empresas/empresas.component';

const appRoutes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    PerfilComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    EmpresasComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
