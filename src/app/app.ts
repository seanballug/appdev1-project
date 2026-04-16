import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 👈 THIS IS THE FIX
  templateUrl: './app.html'
})
export class AppComponent {}