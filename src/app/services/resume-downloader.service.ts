import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDownloaderService {

  constructor() { }

  private resumeUrl = 'assets/Resumes/ThengaraiMaharajan_FrontEnd_2.7years.pdf';

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
