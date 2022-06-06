import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlertDirective } from "src/app/directives/alert.directive";
import { AuthService } from "src/app/services/auth.service";
import { AlertComponent } from "../alert/alert.component";
import { User } from "./user.model";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  @ViewChild(AlertDirective) alertDirective: AlertDirective;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.alertDirective);
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    let authPromise: Promise<firebase.default.auth.UserCredential>;

    const email = form.value.email;
    const password = form.value.password;
    if (!form.valid) {
      return;
    }

    this.isLoading = true;
    event.preventDefault();
    if (this.isLoginMode) {
      authPromise = this.authService.signin(email, password);
    } else {
      authPromise = this.authService.signup(email, password);
    }

    authPromise.then(
      (res) => {
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        const user = new User(
          res.user.email,
          res.user.uid,
          res.user.refreshToken,
          expirationDate
        );
        this.authService.userSubject.next(user);
        this.router.navigate(["/recipe"]);
        localStorage.setItem("user", JSON.stringify(user));
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.error = err;
        this.isLoading = false;
        this.alertComponent(this.error);
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private alertComponent(err) {
    this.alertDirective.viewContainerRef.clear();

    const cmpRef =
      this.alertDirective.viewContainerRef.createComponent(AlertComponent);

    cmpRef.instance.message = err;
    this.closeSub = cmpRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.alertDirective.viewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
