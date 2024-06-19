import { NgModule } from '@angular/core';
import { CarDataDisplayTableComponent } from './car-data-display-table.component';
import { CarService } from '../../services/carService';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app/app.routes';
import { SearchBarComponent } from "../helpers/search-bar/search-bar.component";

@NgModule({
    declarations: [
        CarDataDisplayTableComponent
    ],
    providers: [
        CarService,
        provideHttpClient()
    ],
    exports: [
        CarDataDisplayTableComponent
    ],
    imports: [
        CommonModule,
        SearchBarComponent
    ]
})
export class CarDataDisplayTableModule { }
