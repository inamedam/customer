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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzDemoInputSearchInputComponent } from './search/search.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDemoPaginationChangerComponent} from './pagination/pagination.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { SearchService } from './search.service';
import { PaginationService } from './pagination.service';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';


registerLocaleData(en);

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
    CustcardComponent,
    NzDemoInputSearchInputComponent,
    NzDemoPaginationChangerComponent,
    DeleteConfirmationDialogComponent

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
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSnackBarModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzPaginationModule,
    NzLayoutModule,
    //
    NzMenuModule,
    NzSelectModule,
    NzPopoverModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzTableModule,
    NzFormModule ,
    NzCheckboxModule,
    NzDividerModule,
    NzTagModule

  ],
  providers: [
    CustomerService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    LoginService,
    DarkModeService,
    AuthInterceptor,
    { provide: NZ_I18N, useValue: en_US },
    SearchService,
    PaginationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
