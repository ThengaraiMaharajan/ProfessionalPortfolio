import { Component } from '@angular/core';
import { externalLink } from '../../../../../enums/externalLinks.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  externalLinks : any = externalLink;

}
