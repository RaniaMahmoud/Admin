import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { LayOutWithHeaderComponent } from './Components/lay-out-with-header/lay-out-with-header.component';
import { LayOutComponent } from './Components/lay-out/lay-out.component';
import { LoginComponent } from './Components/login/login.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './Components/card/card.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { AllAdminComponent } from './Components/all-admin/all-admin.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AuthorizationGuard } from './Guards/authorization.guard';
/*i)	Home (static page with any data)
ii)	About us (static page with any data)
iii)	Contact us (static page with any data)
iv)	Products (that opens Shopping cart component).
 */
const routes: Routes = [
  {
    path: '',
    component: LayOutComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: AllProductsComponent,canActivate : [AuthorizationGuard] },
      { path: 'AboutUs', component: AboutUsComponent },
      { path: 'ContactUs', component: ContactUsComponent },
      { path: 'Products', component: AllProductsComponent, canActivate : [AuthorizationGuard] },
      { path: 'Products/Edit/:id', component: NewProductComponent },
      { path: 'Card', component: CardComponent },
      { path: 'Admin/insertProduct', redirectTo: '/Admin', pathMatch: 'full' },
      { path: 'Admin', component: NewProductComponent , canActivate : [AuthorizationGuard]},
      { path: 'AllAdmin', component: AllAdminComponent, canActivate : [AuthorizationGuard]},
    ],
  },
  {
    path: '',
    component: LayOutWithHeaderComponent,
    children: [
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
    ],
  },
  {
    path: 'User',
    loadChildren: () =>
      import('src/app/Components/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'Product',
    loadChildren: () =>
      import('src/app/Modules/product/product.module').then(
        (p) => p.ProductModule
      ),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, MatDialogModule,CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
