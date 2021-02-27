import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  constructor(private _snack: MatSnackBar) {

  }

  call({ text }) {
    this._snack.open(text, '', { duration: 4000 })
  }
}
