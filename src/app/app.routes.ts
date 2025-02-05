import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CharactersComponent } from './components/characters/characters.component';

export const routes: Routes = [
    {path:"", component:ProductsComponent},
    {path:"characters", component:CharactersComponent},
];
