import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  username: string = "";
  mobileNumber: string = "";
  userRole: string = "";
  passwordMismatch: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }
    this.passwordMismatch = false;

    if (!this.isPasswordComplex(this.password)) {
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
      username: this.username,
      mobileNumber: this.mobileNumber,
      userRole: this.userRole
    };

    this.authService.register(user).subscribe({
      next: () => {
        alert("Registration Successful!");
        this.router.navigate(['/login']);
      },
      // error: (error) => {
      //   alert("Registration Unsuccessful: " + error.error);
      //   this.router.navigate(['/error']);
      // }
    });
  
  }

  isPasswordComplex(password: string): boolean {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(password);
    return hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
  }

}
