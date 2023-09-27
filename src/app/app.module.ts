import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiSvgModule,
  TuiDataListModule,
  TuiHostedDropdownModule,
  TuiButtonModule,
  TuiHintModule,
  TuiTextfieldControllerModule,
  TuiDropdownModule,
  TuiThemeNightModule,
  TuiModeModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import {
  TuiAccordionModule,
  TuiMarkerIconModule,
  TuiInputNumberModule,
  TuiTabsModule,
  TuiTextareaModule,
  TuiInputPasswordModule,
  TuiInputModule,
} from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { BuyComponent } from './buy/buy.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    BuyComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiTabsModule,
    TuiAccordionModule,
    TuiMarkerIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiInputModule,
    TuiHintModule,
    TuiTextfieldControllerModule,
    TuiTextareaModule,
    TuiButtonModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule,
    TuiDropdownModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
