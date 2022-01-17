import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { hasPermission } from 'src/app/core/helpers/activate.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl('/auth/login')
  }

  hasMenuPermission(): boolean {
    return hasPermission('/menu');
  }
}
