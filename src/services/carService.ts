import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from "../interface/ICar";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class CarService {
    private api = 'http://localhost:8080/hansab/cars';
    private sortDirection: string = '';
    private searchTerm: string = '';
    private columnValue: string = '';

    constructor(private http: HttpClient) { }

    getCars(columnValue: string, searchTerm: string): Observable<Car[]> {
        this.searchTerm = searchTerm;
        this.columnValue = columnValue;

        return this.fetchFilteredCars();
    }

    fetchFilteredCars(): Observable<Car[]>  {
        let params = new HttpParams();

        if (this.searchTerm !== '') {
            params = params.set('find', this.searchTerm);
        }

        if (this.sortDirection) {
            params = params.set('sort', `${this.columnValue}:${this.sortDirection}`);
        }

        return this.http.get<Car[]>(this.api, { params });
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
