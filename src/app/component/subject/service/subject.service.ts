import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public stringSubject = new Subject<string>();

  passValue(data: string | undefined) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }

}
