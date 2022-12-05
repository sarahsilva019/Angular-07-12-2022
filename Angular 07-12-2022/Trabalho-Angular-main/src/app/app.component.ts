import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Cirilo';
  userData = {
    email: 'cirilo@gmail.com',
    funcao: 'Admin'
  }
  title = 'curso-angular';
}
