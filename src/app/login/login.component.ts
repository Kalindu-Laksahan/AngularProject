import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" placeholder="Enter your username">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password">
    </div>
    <button class="primary" type="button">Login</button>
  </form>
</section>

  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
