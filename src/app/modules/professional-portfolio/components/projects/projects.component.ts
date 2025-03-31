import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  route: string;
  external?: boolean;
  demoLink?: string;
  codeLink?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Chatbot',
      description: 'This AI-powered chatbot leverages Google Gemini API to provide intelligent, real-time responses to user queries.',
      route: '/chatbot',
      demoLink: '/chatbot',
      codeLink: 'https://github.com/ThengaraiMaharajan/chatbot'
    },
    {
      title: 'Resume Builder',
      description: 'Built with Angular, Bootstrap, jsPDF, allowing users to generate professional PDF resumes dynamically.',
      route: '/resume-builder',
      demoLink: '/resume-builder',
      codeLink: 'https://github.com/ThengaraiMaharajan/Angular_ResumeBuilder'
    },
    {
      title: 'Dynamic Forms Generator',
      description: 'Utilizes Angular reactive forms to generate form fields dynamically from user-provided data.',
      route: '/dynamic-forms',
      demoLink: '/dynamic-forms',
      codeLink: 'https://github.com/ThengaraiMaharajan/Angular_ReactiveFormBuilder'
    },
    {
      title: 'Timeline Tracker',
      description: 'Developed using Angular & ExcelJS to track events and generate Excel reports for better visualization.',
      route: '/time-lines-tracker',
      demoLink: '/time-lines-tracker',
      codeLink: 'https://github.com/ThengaraiMaharajan/Angular_TimeLineTracker'
    },
    {
      title: 'Edge Detection & Cropper',
      description: 'Document scanner using OpenCV. Implemented edge detection feature for cropping purposes.',
      route: 'https://thengaraimaharajandev.github.io/Image-Edge-Detection/',
      external: true,
      demoLink: 'https://thengaraimaharajandev.github.io/Image-Edge-Detection/',
      codeLink: 'https://github.com/ThengaraiMaharajan/ImageCropDetection'
    }
  ];
}
