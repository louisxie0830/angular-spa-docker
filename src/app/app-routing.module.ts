import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy',
    enableTracing: environment.production ? false : true // debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
