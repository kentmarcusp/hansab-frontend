import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from '../../services/userService';
import { UserDataDisplayTableComponent } from './user-data-display-table.component';
import { SearchBarComponent } from "../helpers/search-bar/search-bar.component";

@NgModule({
    declarations: [
        UserDataDisplayTableComponent
    ],
    providers: [
        provideHttpClient(),
        UserService
    ],
    exports: [
        UserDataDisplayTableComponent
    ],
    imports: [
        CommonModule,
        SearchBarComponent
    ]
})
export class UserDataDisplayTableModule { }
