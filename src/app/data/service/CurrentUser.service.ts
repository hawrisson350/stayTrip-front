import { Injectable } from '@angular/core';
import { User } from '@data/schema/user.model';
import { Observable, shareReplay, map, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrentUserService {

    private _user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

    constructor() {
        if (localStorage.getItem('user')) {
            const userSaved = JSON.parse(localStorage.getItem('user') ?? '');
            const currentUser = new User(
                userSaved?._id,
                userSaved?._name,
                userSaved?._lastname,
                userSaved?._birthday,
                userSaved?._gender,
                userSaved?._documentType,
                userSaved?._documentNumber,
                userSaved?._email,
                userSaved?._phone,
                userSaved?._password,
                userSaved?._role,
            );
            this.user = currentUser;
        }
    }

    get user(): Observable<User | null> {
        return this._user.asObservable();
    }

    set user(currentuser: User) {
        localStorage.setItem('user', JSON.stringify(currentuser))
        this._user.next(currentuser);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    LogOut() {
        localStorage.removeItem('user');
        this._user.next(null);
    }

}