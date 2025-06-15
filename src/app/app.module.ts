import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { OrderComponent } from './order/order.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonChangerDirective } from './button-changer.directive';
import { RouteTwoChildOneComponent } from './route-two-child-one/route-two-child-one.component';
import { RouteTwoChildTwoComponent } from './route-two-child-two/route-two-child-two.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/count-store';

const routes:Routes = [
  {path: '', redirectTo: '/route-one', pathMatch: 'full'},
  {path: 'route-one', component: RouteOneComponent},
  {path: 'route-one/:name', component: RouteOneComponent},
  {path: 'route-two', component: RouteTwoComponent, pathMatch: 'full', children: [
    // {path: '', redirectTo: 'child-one', pathMatch: 'full'},
    {path: 'child-one', component: RouteTwoChildOneComponent},
    {path: 'child-two', component: RouteTwoChildTwoComponent},
  ]},
  {path: 'route-three/:id', component: RouteThreeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    OrderComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent,
    ButtonChangerDirective,
    RouteTwoChildOneComponent,
    RouteTwoChildTwoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({count: counterReducer}) // Assuming counterReducer is imported from the state management file
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
