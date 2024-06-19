import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/userService";
import { User } from "../../interface/IUser";
import { Router } from "@angular/router";
import { Car } from "../../interface/ICar";

@Component({
  selector: 'app-user-data-display-table',
  templateUrl: './user-data-display-table.html',
  styleUrl: './user-data-display-table.css'
})

export class UserDataDisplayTableComponent implements OnInit {

  searchTerm: string = '';
  users: User[] = [];
  filteredUsers: User[] = [];
  
  sortDirection: string | null = null;


  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchAllUserData();
  }

  performSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterUsers();
    this.updateUrl(this.userService.getSortingType());
  }

  fetchAllUserData(): void {
    this.userService.getUsers(this.searchTerm).subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Could not fetch users!', error);
      }
    );
  }

  sortUsers(): void {
    let sortingType = this.userService.toggleSort();
    this.fetchAllUserData();
    this.updateUrl(sortingType);
  }

  filterUsers(): void {
    this.fetchAllUserData();
  }

  constructUrl(sortingType: string): string {
    let url = '/hansab/users';
  
    if (this.searchTerm) {
      url += `?find=${this.searchTerm}`;
    }
  
    if (sortingType) {
      url += `${this.searchTerm ? '&' : '?'}sort=name:${sortingType}`;
    }
  
    return url;
  }
  
  updateUrl(sortingType: string): void {
    const url = this.constructUrl(sortingType);
    this.router.navigateByUrl(url);
  }

  navigateToCarDisplay() {
    this.router.navigate([`/hansab/cars`]);
  }

}
