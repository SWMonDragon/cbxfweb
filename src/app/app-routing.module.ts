import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './top-bar/top-bar.component';
import {FooterComponent} from './footer/footer.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'topbar',component: TopBarComponent, children :
      [ {path: 'main',component: MainComponent},
      ]
  },
  {path: 'footer',component: FooterComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
