import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interface/IUser';


@Injectable({
    providedIn: 'root',
})

export class UserService {

    private api = 'http://localhost:8080/hansab/users';
    private sortDirection: string = '';
    private searchTerm: string = '';

    constructor(private http: HttpClient) { }

    getUserById(id: number): Observable<any> {
        return this.http.get<User[]>(`${this.api}/${id}`);
    }

    getCarsByUserId(id: number): Observable<any> {
        return this.http.get<User[]>(`${this.api}/${id}/cars`);
    }

    calculateAmountOfCars(listOfCars: any) {
        return listOfCars.length();
    }

    getUsers(searchTerm: string): Observable<User[]> {
        this.searchTerm = searchTerm;
        return this.fetchUsers();
    }

    fetchUsers(): Observable<User[]> {
        let params = new HttpParams();

        if (this.searchTerm !== '') {
            params = params.set('find', this.searchTerm);
        }

        if (this.sortDirection !== '') {
            params = params.set('sort', `name:${this.sortDirection}`);
        }

        return this.http.get<User[]>(this.api, { params });
    }

    getSortingType() {
        return this.sortDirection;
    }

    toggleSort() {
        if (this.sortDirection === '') {
            this.sortDirection = 'asc';
            return this.sortDirection;
        } if (this.sortDirection === 'asc') {
            this.sortDirection = 'desc'
            return this.sortDirection;
        } else {
            this.sortDirection = '';
            return this.sortDirection;
        }
    }
}
