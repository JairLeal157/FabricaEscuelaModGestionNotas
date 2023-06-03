import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor( 
    private fb: FormBuilder, 
    private loginSvc: LoginService,
    private router: Router
    ) { }

  onSubmit() {
    let emailValue = this.form.value.email;
    this.loginSvc.setValue(emailValue).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/professor/view-groups']);
      }
    });
  }

}
