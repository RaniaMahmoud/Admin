import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directive/product-card.directive';
import { EgynationaIDPipe } from './/Pipes/egynationa-id.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { OrderComponent } from './Components/order/order.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { LayOutComponent } from './Components/lay-out/lay-out.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayOutWithHeaderComponent } from './Components/lay-out-with-header/lay-out-with-header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDialogComponent } from './Components/product-dialog/product-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { CardComponent } from './Components/card/card.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminRegistComponent } from './Components/admin-regist/admin-regist.component';
import { ProductDetailsPopUpComponent } from './Components/product-details-pop-up/product-details-pop-up.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { AdminLayOutComponent } from './Components/admin-lay-out/admin-lay-out.component';
import { AllAdminComponent } from './Components/all-admin/all-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductCardDirective,
    EgynationaIDPipe,
    CreditCardPipe,

    HomeComponent,
    ErrorComponent,
    AboutUsComponent,
    ContactUsComponent,
    AllAdminComponent,
    RegisterComponent,
    LayOutComponent,
    LoginComponent,
    NewProductComponent,
    LayOutWithHeaderComponent,
    ProductDialogComponent,
    ProductsComponent,
    CardComponent,
    AdminLoginComponent,
    AdminRegistComponent,
    ProductDetailsPopUpComponent,
    AdminHomeComponent,
    AllProductsComponent,
    AdminLayOutComponent,
    AdminRegistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
