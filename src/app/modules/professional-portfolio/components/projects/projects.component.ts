import { Component } from '@angular/core';
import { externalLink } from '../../../../../enums/externalLinks.enum';


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
      title: 'Dynamic Components - Dashboards',
      description: 'Highcharts-powered dashboard that renders various chart types (bar, line, column) dynamically from JSON configurations. Designed for enterprise-level data visualizations with dark/light theme support, responsive design, and reusable chart structures',
      route: '/dynamic-components/dashboards',
      demoLink: '/dynamic-components/dashboards',
      codeLink: 'https://github.com/ThengaraiMaharajan/Angular_DynamicDashboards'
    },
    {
      title: 'Dynamic Components - Forms',
      description: 'A JSON-driven Angular tool that builds reactive forms on the fly with advanced validation rules, conditional fields, and user-configurable structure. Supports form previews, multiple input types, nested validations, and real-time form rendering logic.',
      route: '/dynamic-components/forms',
      demoLink: '/dynamic-components/forms',
      codeLink: 'https://github.com/ThengaraiMaharajan/Angular_ReactiveFormBuilder'
    },
    {
      title: 'Dynamic Components - Tables',
      description: 'A powerful table rendering system built with Angular Material. Generates dynamic tables with customizable headers, sorting, pagination, responsive design, and support for external/internal links. Perfect for handling tabular datasets from various APIs.',
      route: '/dynamic-components/tables',
      demoLink: '/dynamic-components/tables',
      codeLink: 'https://github.com/ThengaraiMaharajan/Angular_DynamicTables'
    },
    {
      title: 'Chatbot',
      description: 'A conversational chatbot interface powered by Google Gemini API. It features a clean chat UI with real-time markdown-rendered responses, skeleton loaders during typing, and seamless two-way interaction for intelligent assistance.',
      route: '/chatbot',
      demoLink: '/chatbot',
      codeLink: 'https://github.com/ThengaraiMaharajan/chatbot'
    },
    {
      title: 'Resume Builder',
      description: 'A fully interactive resume builder built with Angular, enabling users to input personal, educational, and professional data dynamically. Features real-time live preview, AI-generated profile summaries and role descriptions via Gemini API, and one-click PDF download using jsPDF and html2canvas.',
      route: '/resume-builder',
      demoLink: '/resume-builder',
      codeLink: 'https://github.com/ThengaraiMaharajan/Angular_ResumeBuilder'
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
      description: 'An OpenCV-based image processing utility for document scanning. Features real-time edge detection and cropping capabilities using HTML5 Canvas. Deployed as a lightweight, standalone app for browser-based document digitization.',
      route: externalLink.edgeDet,
      external: true,
      demoLink: externalLink.edgeDet,
      codeLink: 'https://github.com/ThengaraiMaharajan/ImageCropDetection'
    },
    {
      title: 'Financial Step-Up Calculators',
      description: 'Web-based financial tools for long-term investment planning. Includes an NPS calculator for retirement corpus estimation and a step-up investment simulator. Built using Bootstrap and vanilla JavaScript, with clean UI and export-friendly tables.',
      route: externalLink.calculators,
      external: true,
      demoLink: externalLink.calculators,
      codeLink: 'https://github.com/ThengaraiMaharajan/Calculators'
    }
  ];
}
