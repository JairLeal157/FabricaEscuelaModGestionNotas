import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public storedValue: any;

  setValue(value: any): Observable<any> {
    this.storedValue = value;
    return of(this.storedValue);
  }

  getValue(): any {
    return this.storedValue;
  }
}
