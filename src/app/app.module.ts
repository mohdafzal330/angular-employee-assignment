import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmployeeService, EMP_SERVICE } from 'src/services/employee.service';
import { StudentGuard } from 'src/services/student-graud.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './common/interceptors/token.interceptor';
import { GlobalErrorHandler } from './common/validators/global-error-handler';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    NotfoundComponent,
    AccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'students',
        component: StudentComponent,
        canActivate: [StudentGuard],
      },
      { path: 'access-denied', component: AccessDeniedComponent },
      { path: '', component: EmployeeComponent },
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  providers: [
    StudentGuard,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: EMP_SERVICE, useClass: EmployeeService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
