import { Routes } from '@angular/router';
import { Main } from './Pages/main/main';

export const routes: Routes = [
    {path: '', component:Main, pathMatch: 'full'},
];
