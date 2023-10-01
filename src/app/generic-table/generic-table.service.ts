import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenericTableService {
  constructor() { }

  data = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'emai@casd.asd', phone: '1-770-736-8031 x56442', website: 'hildegard.org' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'asd@asd.cdd', phone: '010-692-6593 x09125', website: 'anastasia.net' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'ssss@asddd.cdf', phone: '1-463-123-4447', website: 'ramiro.info' },
  ]

  getData(){
    return of(this.data).pipe(delay(1000));
  }
}