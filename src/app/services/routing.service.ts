import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private router: Router
  ) { }

  routeToHome(){
    this.router.navigate(['/home']);
  }

  routeToExplore(){
    this.router.navigate(['/home/profile']);
  }

  routeToProjects(){
    this.router.navigate(['/home/projects']);
  }

}
