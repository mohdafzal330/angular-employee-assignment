import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService, EMP_SERVICE } from 'src/services/employee.service';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './common/interceptors/token.interceptor';
import { GlobalErrorHandler } from './common/validators/global-error-handler';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: EMP_SERVICE, useClass: EmployeeService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
