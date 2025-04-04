import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  environmentLink : any = environment;
  currentYear: number = new Date().getFullYear();
}
