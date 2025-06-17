import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';
import { PurePipePipe } from './pure-pipe/pure-pipe.pipe';
import { ImpureJsonPipe, ImpurePipePipe, ImpureSearchPipe } from './impure-pipe/impure-pipe.pipe';
import { CustomPipesHomeComponent } from './custom-pipes-home/custom-pipes-home.component';
import { CustomPipesService } from './custom-pipes.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PurePipeComponent,
    ImpurePipeComponent,
    PurePipePipe,
    ImpurePipePipe,
    ImpureJsonPipe,
    ImpureSearchPipe,
    CustomPipesHomeComponent
  ],
  imports: [
    CommonModule,
    CustomPipesRoutingModule,
    FormsModule
  ],
  providers: [CustomPipesService]
})
export class CustomPipesModule { }
