import { Component, OnInit} from '@angular/core';

// RxJ

// Services
import { GroupsService } from '../../services/groups.service';
import { CourseInterface } from '../../interfaces/course-interface';
import { GroupInterface } from '../../interfaces/group-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-view-groups-professor',
  templateUrl: './view-groups-professor.component.html',
  styleUrls: ['./view-groups-professor.component.scss'],
})
export class ViewGroupsProfessorComponent implements OnInit{
  public id: number | string = 0;
  public courses: any[] = [];
  public groups: any[] = [];

  storedValue: any = '';

  constructor(
    private groupsSvc: GroupsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private loginSvc: LoginService
    ) {
    this.storedValue = this.loginSvc.getValue();
    this.groupsSvc.getGroups(this.storedValue).subscribe((resp) => {
      console.log(resp);
      this.courses = resp;
    });
  } 

  ngOnInit(): void {
    
  }

  searchGroups(course: any) {
    this.groups = course['grupos'];
    console.log(this.groups)
  }

  navegateToGroup(id: number) {
    this.router.navigate([
      '/professor/group/' + id
    ]);
  }
}
