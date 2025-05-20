import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-dashboard',
  imports:[CommonModule,FormsModule ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showLoginForm = false;
  showDashboard = false;
  userData: User[] = []; // store registered users
  currentUser: string | null = null;

  constructor() { }

  ngOnInit(): void {
    // After 10 seconds, show registration popup
    setTimeout(() => {
      this.openRegisterPopup();
    }, 10000);
  }

  openRegisterPopup() {
    Swal.fire({
      title: 'Register',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Username">` +
        `<input id="swal-input2" type="password" class="swal2-input" placeholder="Password">`,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const username = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const password = (document.getElementById('swal-input2') as HTMLInputElement).value;
        if (!username || !password) {
          Swal.showValidationMessage('Please enter both username and password');
          return;
        }
        if (this.userData.find(u => u.username === username)) {
          Swal.showValidationMessage('Username already exists!');
          return;
        }
        return { username, password };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.userData.push(result.value);
        Swal.fire('Registered!', 'Registration successful. Please login now.', 'success').then(() => {
          this.showLoginForm = true; // Show login form
        });
      }
    });
  }

  login(username: string, password: string) {
    const user = this.userData.find(u => u.username === username && u.password === password);
    if (user) {
      Swal.fire('Success', 'Login successful', 'success');
      this.currentUser = user.username;
      this.showDashboard = true;
      this.showLoginForm = false;
    } else {
      Swal.fire('Error', 'Invalid username or password', 'error');
    }
  }

  logout() {
    this.currentUser = null;
    this.showDashboard = false;
    this.openRegisterPopup();
  }
}
