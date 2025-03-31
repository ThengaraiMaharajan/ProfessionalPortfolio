import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResumeDownloaderService } from '../../services/resume-downloader.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isDarkMode = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() themeToggle = new EventEmitter<void>();

  constructor( private resumeDownloaderService : ResumeDownloaderService) {}

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  downloadResumePdf() {
    this.resumeDownloaderService.downloadResume();
  }

  toggleTheme() {
    this.themeToggle.emit();
  }
}
