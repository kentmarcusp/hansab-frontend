import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/helpers/navbar/navbar.component";
import { UserDataDisplayTableModule } from "../components/user-data-display-table/user-data-display-table.module";
import { SearchBarComponent } from "../components/helpers/search-bar/search-bar.component";
import { CarDataDisplayTableModule } from '../components/car-data-display-table/car-data-display-table.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, UserDataDisplayTableModule, CarDataDisplayTableModule, SearchBarComponent]
})
export class AppComponent {
  title = 'hansab-frontend';
}
