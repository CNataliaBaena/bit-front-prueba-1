import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Products } from './components/pages/products/products'
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
{ path: "inicio", component: Home, title: "log in"},
{ path: "products", component: Products, title: "user list"},
{ path: "**", component: PageNotFound, title: "error 404" }
];
