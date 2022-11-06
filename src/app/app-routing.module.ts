import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './pages/about/about.component';
import { Career } from './pages/career/career.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Poster } from './pages/posters/poster.component';
import { Privacy } from './pages/privacy/privacy.component';
import { Terms } from './pages/static/static.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: About },
  { path: 'privacy', component: Privacy },
  {path: 'poster',component:Poster},
  {path:'terms', component:Terms},
  {path:'career', component:Career},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
