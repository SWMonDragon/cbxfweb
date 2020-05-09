import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SuperfoodsComponent } from './superfoods/superfoods.component';
import { FreshproductsComponent } from './freshproducts/freshproducts.component';
import { ExclusiveproductsComponent } from './exclusiveproducts/exclusiveproducts.component';
import { AboutavocadoComponent } from './aboutavocado/aboutavocado.component';
import { BannerbottomComponent } from './bannerbottom/bannerbottom.component';
@NgModule({
  exports:[

  ]
  ,declarations: [
    AppComponent,
    TopBarComponent,
     MainComponent,
     FooterComponent,
     CarouselComponent,
     SuperfoodsComponent,
     FreshproductsComponent,
     ExclusiveproductsComponent,
     AboutavocadoComponent,
     BannerbottomComponent,  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    [NgbModule],
    BrowserModule,
    RouterModule.forRoot([
      { path: 'main',component: MainComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
