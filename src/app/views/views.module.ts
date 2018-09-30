import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AboutComponent, HomeComponent, DownloadComponent],
  exports: [HomeComponent, AboutComponent]
})
export class ViewsModule { }
