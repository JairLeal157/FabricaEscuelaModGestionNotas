import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
import { IProfessor } from 'src/app/modules/professor/interfaces/professor-interface';
import { GroupsService } from 'src/app/modules/professor/services/groups.service';
import { ProfessorService } from 'src/app/modules/professor/services/professor.service';

@Component({
  selector: 'app-info-group',
  templateUrl: './info-group.component.html',
  styleUrls: ['./info-group.component.scss']
})
export class InfoGroupComponent{

  public id = 0;
  public courses: any[] = [];
  public group: any= {};
  public professor: any = {};

  storedValue: any = '';

  constructor(
    private activateRoute: ActivatedRoute, 
    
    private groupsSvc: GroupsService,
    private professorSvc: ProfessorService,
    private loginSvc: LoginService
  ) {

    this.storedValue = this.loginSvc.getValue();
    const group = this.activateRoute.params.pipe(
      switchMap(
        params => {
          this.id = params['id']
          return this.groupsSvc.getGroup(params['id'])
        }
      )
    );
    group.subscribe(
      (data) => {
        //console.log(data)
        this.group = data
      }
    );

    this.professorSvc.getProfessor(this.storedValue).subscribe((resp) => {
      console.log(resp);
      this.professor = resp;
    });
   }


}
