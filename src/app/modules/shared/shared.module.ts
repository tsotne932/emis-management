import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({ animationType: 'wanderingCubes' }),

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxLoadingModule,

  ],
  providers: [

  ]
})
export class SharedModule { }
