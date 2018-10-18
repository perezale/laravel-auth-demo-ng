import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`http://localhost/users`);
    }

    getById(id: number) {
        return this.http.get(`http://localhost/users/` + id);
    }

    register(user: User) {
        return this.http.post(`http://localhost/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`http://localhost/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost/users/` + id);
    }
}