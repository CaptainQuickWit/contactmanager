import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users?: BehaviorSubject<User[]>;
  
  private dataStore: {
    users: User[]
  }
  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
  }
  loadAll () {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl)
    .subscribe( data => {
      this.dataStore.users = data;
    },
      error => {
        console.log("Failed to fetch users");
      }
    );
  }
}
