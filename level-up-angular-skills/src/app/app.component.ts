import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    FormsModule,
    MatButtonModule,
  ],
  // templateUrl: './app.component.html',
  template:`
  <div class="m-2 p-2">
    <h3>Angular Router App</h3>
    <nav>
      <ul>
        <li><a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a></li>
        <li><a routerLink="/content-projection" routerLinkActive="active" ariaCurrentWhenActive="page">Content Projection</a></li>
        <button mat-button>Click me!</button> <!-- Botão do Angular Material -->

      </ul>
    </nav>
    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'level-up-angular-skills';
}
