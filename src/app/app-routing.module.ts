import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DownloadComponent } from './views/download/download.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'download', component: DownloadComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
