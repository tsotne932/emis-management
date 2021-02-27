import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [

  ]
})
export class SharedModule { }
