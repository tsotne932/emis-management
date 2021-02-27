import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User.class';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.user.subscribe((data) => {
      if (data && data.user) {
        this._router.navigate(['/protected']);
      } else {
        this._router.navigate(['/guest/login']);
      }
    })
  }

}
