import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall!: boolean;

  users?: Observable<User[]>;

  constructor(private breakpointObserver: BreakpointObserver,   
    private userService: UserService ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`]).subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
          
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users?.subscribe(data => {
      console.log(data);
    })
  }
}
