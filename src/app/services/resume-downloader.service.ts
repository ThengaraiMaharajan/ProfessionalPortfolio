import { Injectable } from '@angular/core';
import { resumeRoute } from '../../enums/resumeRoute.enum';

@Injectable({
  providedIn: 'root'
})
export class ResumeDownloaderService {

  constructor() { }

  private resumeUrl = resumeRoute.resume;

  downloadResume() {
    window.open(this.resumeUrl, '_blank');

    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'ThengaraiMaharajan-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
