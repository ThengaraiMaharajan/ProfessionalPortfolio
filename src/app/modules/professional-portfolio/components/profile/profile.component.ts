import { Component } from '@angular/core';
import { externalLink } from '../../../../../enums/externalLinks.enum';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  externalLinks : any = externalLink;

}
