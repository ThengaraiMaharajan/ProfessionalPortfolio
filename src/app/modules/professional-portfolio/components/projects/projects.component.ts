import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  route: string;
  external?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Chatbot',
      description: 'This AI-powered chatbot leverages Google Gemini API to provide intelligent, real-time responses to user queries.',
      route: '/chatbot'
    },
    {
      title: 'Resume Builder',
      description: 'Built with Angular, Bootstrap, jsPDF, allowing users to generate professional PDF resumes dynamically.',
      route: '/resume-builder'
    },
    {
      title: 'Dynamic Forms Generator',
      description: 'Utilizes Angular reactive forms to generate form fields dynamically from user-provided data.',
      route: '/time-lines-tracker'
    },
    {
      title: 'Timeline Tracker',
      description: 'Developed using Angular & ExcelJS to track events and generate Excel reports for better visualization.',
      route: '/dynamic-forms'
    },
    {
      title: 'Image Detection & Manual Cropper',
      description: 'Document scanner using OpenCV and edge detection.',
      route: 'https://thengaraimaharajandev.github.io/Image-Edge-Detection/',
      external: true
    }
  ];
}
