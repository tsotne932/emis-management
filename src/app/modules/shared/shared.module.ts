import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxLoadingModule } from 'ngx-loading';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({ animationType: 'wanderingCubes' }),
    MatIconModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxLoadingModule,
    MatIconModule

  ],
  providers: [

  ]
})
export class SharedModule { }
