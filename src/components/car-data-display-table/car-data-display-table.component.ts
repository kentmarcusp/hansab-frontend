import { Component } from '@angular/core';
import { Car } from '../../interface/ICar';
import { Router } from '@angular/router';
import { CarService } from '../../services/carService';
import { UserService } from '../../services/userService';
import { User } from '../../interface/IUser';

@Component({
  selector: 'app-car-data-display-table',
  templateUrl: './car-data-display-table.component.html',
  styleUrl: './car-data-display-table.component.css'
})

export class CarDataDisplayTableComponent {

  cars: Car[] = [];
  user: User | undefined;
  private columnValue: string = '';
  private searchTerm: string = '';

  constructor(private carService: CarService, 
    private router: Router) { }


  ngOnInit(): void {
    this.fetchAllCarData();
  }

  fetchAllCarData(): void {
    this.carService.getCars(this.columnValue, this.searchTerm).subscribe(
      (data) => {
        this.cars = data;
      },
      (error) => {
        console.error('Could not fetch cars!', error);
      }
    );
  }

  performSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.fetchAllCarData();
    this.updateUrl(this.carService.getSortingType(), this.columnValue);
  }

  sortCars(columnValue: string): void {
    this.columnValue = columnValue;
    let sortingType = this.carService.toggleSort();
    this.fetchAllCarData();
    this.updateUrl(sortingType, columnValue);
  }

  updateUrl(sortingType: string, columnValue: string): void {
    const url = this.constructUrl(sortingType);
    this.router.navigateByUrl(url);
  }

  constructUrl(sortingType: string): string {
    let url = '/hansab/cars';
  
    if (this.searchTerm) {
      url += `?find=${this.searchTerm}`;
    }
  
    if (sortingType) {
      url += `${this.searchTerm ? '&' : '?'}sort=${this.columnValue}:${sortingType}`;
    }
    return url;
  }
}
