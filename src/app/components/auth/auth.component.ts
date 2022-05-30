import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;
    if (this.isLoginMode) {
    } else {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signup(email, password).then(
        (res) => {
          console.log(res);
          this.isLoading = false;
        },
        (err) => {
          console.log(err.message);
          this.error = "An error occured";
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}
