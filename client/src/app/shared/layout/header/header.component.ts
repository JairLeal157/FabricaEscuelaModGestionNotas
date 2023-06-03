import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/core/services/login.service';
import { ProfessorService } from 'src/app/modules/professor/services/professor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public professor: any = {};
  storedValue: any;
  id: any = 0;

  constructor(
    private professorSvc: ProfessorService,
    private activateRoute: ActivatedRoute,
    private loginSvc: LoginService
  ) {
    this.storedValue = this.loginSvc.getValue();

    const PROFESSOR = this.activateRoute.params.pipe(
      switchMap(
        params => {
          this.id = params['id']
          return this.professorSvc.getProfessor(params['id'])
        }
      )
    );
    
    PROFESSOR.subscribe(
      (data) => {
        console.log(data)
        this.professor = data
      }
    );

  }

  ngOnInit(): void {}
}
