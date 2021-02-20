import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private ok: string = 'pleyt';
  constructor(private router: Router) {}
  changeRouter(){
    this.router.navigateByUrl('/home/add')
  }
  pages = [
    {
   title:"Profil",
   icon:'arrow-forward-outline',
   url:'/someurl'
    },
    {
  title:"Home",
  url: '/home',
  icon:'home-outline'
},
    {title:"Liste de chéque",
  url : "/home/list",
icon:'list-outline'},
{title:"Se déconnecter",
icon:'log-out-outline',
url:'/someurl'}
  ]
}
