import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResumeDownloaderService } from '../../services/resume-downloader.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() visible = false;
  @Output() closeSidebar = new EventEmitter<void>();

  constructor( private resumeDownloaderService : ResumeDownloaderService) {}

  close() {
    this.closeSidebar.emit();
  }

  downloadResumePdf() {
    this.resumeDownloaderService.downloadResume();
  }

}
