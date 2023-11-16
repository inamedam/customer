import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule  } from './app-routing.module';
// import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustComponent } from './cust/cust.component';
import { CustproComponent } from './custpro/custpro.component';
import { CustpromaxComponent } from './custpromax/custpromax.component';
import { CustlistComponent } from './custlist/custlist.component';
import { CustlistproComponent } from './custlistpro/custlistpro.component';
import { ListcustComponent } from './listcust/listcust.component';
import { FormcustComponent } from './formcust/formcust.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './customer-service.service';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LogComponent } from './log/log.component';
import { AuthInterceptor } from './http.interceptor';
import { LoginService } from './login.service';
import { DarkModeService } from './dark-mode.service';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MiniprofileComponent } from './miniprofile/miniprofile.component';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatDrawer } from '@angular/material/sidenav';
// import { MatDrawerContainer } from '@angular/material/sidenav';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { MatMenuModule } from '@angular/material/menu';
import { CustcardComponent } from './custcard/custcard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    CustComponent,
    CustproComponent,
    CustpromaxComponent,
    CustlistComponent,
    CustlistproComponent,
    ListcustComponent,
    FormcustComponent,
    ProfileComponent,
    LogComponent,
    MiniprofileComponent,
    CustcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule, // Import MatSidenavModule instead of MatDrawer and MatDrawerContainer
    MatToolbarModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSnackBarModule



  ],
  providers: [
    CustomerService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    LoginService,
    DarkModeService,
    AuthInterceptor

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
