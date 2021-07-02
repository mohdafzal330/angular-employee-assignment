import { Component } from '@angular/core';
import { AppInitializerService } from 'src/services/app-initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo-app';
  constructor(public appService: AppInitializerService) {}
}
