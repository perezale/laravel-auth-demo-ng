import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Http, Headers, Response} from '@angular/http';
import {User} from './user';


@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    private oauthUrl = "http://localhost/oauth/token";
    private usersUrl = "http://localhost/api/users";

    getAccessToken() {
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        let postData = {
            grant_type: "password",
            client_id: 2,
            client_secret: "YZwf3DeHL4xiRZr4rpKFfzV4thWqf2LppMLtuoEx",
            username: "test@test.com",
            password: "123456",
            scope: ""
        }

        return this.http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        }).pipe(
          map((res: Response) => res.json()),
          catchError((error: any) => Observable.throw(error.json().error || 'Server error'))
        )
    }

    getUsers(accessToken: string): Observable<User[]> {

        var headers = new Headers({
            "Accept": "application/json",
            "Authorization": "Bearer " + accessToken,
        });

        return this.http.get(this.usersUrl, {
            headers: headers
        }).pipe(
          map((res) => res.json()),
          catchError((error: any) => Observable.throw(error.json().error || 'Server error'))
        )
            
    }
}