import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGuardsHomeComponent } from './my-guards-home/my-guards-home.component';
import { MyGuardOneComponent } from './my-guard-one/my-guard-one.component';
import { MyGuardTwoComponent } from './my-guard-two/my-guard-two.component';
import { MyGuardTwoAComponent } from './my-guard-two-a/my-guard-two-a.component';
import { MyGuardTwoBComponent } from './my-guard-two-b/my-guard-two-b.component';
import { MyGuardsService } from './my-guards.guard';

const routes: Routes = [
    { path: '', component: MyGuardsHomeComponent },
    { path: 'my_guard_one/:id', component: MyGuardOneComponent, canActivate: [MyGuardsService], canDeactivate: [MyGuardsService] },
    {
        path: 'my_guard_two', component: MyGuardTwoComponent,
        children: [
            {
                path: 'my_guard_two_a/:id', component: MyGuardTwoAComponent, resolve: {
                    routeStatus: MyGuardsService
                }
            },
            {
                path: 'my_guard_two_b/:id', component: MyGuardTwoBComponent, resolve: {
                    routeStatus: MyGuardsService
                }
            },
        ],
        canActivateChild: [MyGuardsService],
        canActivate: [MyGuardsService],
        data: { allowRoute: true }
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyGuardsRoutingModule { }
