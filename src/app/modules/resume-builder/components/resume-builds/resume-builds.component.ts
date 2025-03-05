import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { AIApiService } from '../../../../services/aiapi.service';

@Component({
  selector: 'app-resume-builds',
  templateUrl: './resume-builds.component.html',
  styleUrls: ['./resume-builds.component.css']
})
export class ResumeBuildsComponent implements OnInit {

  @ViewChild('resumePrint', { static: false }) resumePrint!: ElementRef;

  userDetailsForm!: FormGroup;
  experienceForm!: FormGroup;
  educationForm!: FormGroup;
  certificationForm!: FormGroup;
  skillForm!: FormGroup;
  projectForm!: FormGroup;
  softSkillForm!: FormGroup;
  languageForm!: FormGroup;
  interestForm!: FormGroup;

  constructor(private fb: FormBuilder, private ai : AIApiService) {}

  ngOnInit(): void {
    // Initialize user details form
    this.userDetailsForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      linkedIn: ['', Validators.required],
      location: ['', Validators.required],
      jobDescription: ['', Validators.required]
    });

    // Initialize Experience Form (with dynamic FormArray)
    this.experienceForm = this.fb.group({
      experiences: this.fb.array([this.createExperienceGroup()])
    });

    // Initialize Education Form
    this.educationForm = this.fb.group({
      education: this.fb.array([this.createEducationGroup()])
    });

    // Initialize Certification Form
    this.certificationForm = this.fb.group({
      certifications: this.fb.array([this.createCertificationGroup()])
    });

    // Initialize Skills Form
    this.skillForm = this.fb.group({
      skills: this.fb.array([this.createskillGroup()])
    });

    // Initialize Projects Form
    this.projectForm = this.fb.group({
      projects: this.fb.array([this.createProjectGroup()])
    });

    // Initialize Soft Skills Form
    this.softSkillForm = this.fb.group({
      softSkills: this.fb.array([this.createSoftSkillGroup()])
    });

    // Initialize Languages Form
    this.languageForm = this.fb.group({
      languages: this.fb.array([this.createLanguageGroup()])
    });

    // Initialize Interests Form
    this.interestForm = this.fb.group({
      interests: this.fb.array([this.createInterestGroup()])
    });
  }

  // Factory methods for dynamic form groups
  createExperienceGroup(): FormGroup {
    return this.fb.group({
      designation: ['', Validators.required],
      company: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      location: ['', Validators.required],
      rolesAndResponsibility: ['', Validators.required]
    });
  }

  createEducationGroup(): FormGroup {
    return this.fb.group({
      level: ['', Validators.required],
      percentage: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      instuition: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  createCertificationGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      percentage: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      instuition: ['', Validators.required],
      link: ['', Validators.required],
      certificateNumber: ['', Validators.required]
    });
  }

  createskillGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      skillScore: ['', Validators.required]
    });
  }

  createProjectGroup(): FormGroup {
    return this.fb.group({
      projectName: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  createSoftSkillGroup(): FormGroup {
    return this.fb.group({
      softSkillName: ['', Validators.required],
      softSkillScore: ['', Validators.required]
    });
  }

  createLanguageGroup(): FormGroup {
    return this.fb.group({
      languageName: ['', Validators.required]
    });
  }

  createInterestGroup(): FormGroup {
    return this.fb.group({
      interestName: ['', Validators.required]
    });
  }

  // Getters for FormArrays
  get experiences(): FormArray {
    return this.experienceForm.get('experiences') as FormArray;
  }

  get education(): FormArray {
    return this.educationForm.get('education') as FormArray;
  }

  get certifications(): FormArray {
    return this.certificationForm.get('certifications') as FormArray;
  }

  get skills(): FormArray {
    return this.skillForm.get('skills') as FormArray;
  }

  get projects(): FormArray {
    return this.projectForm.get('projects') as FormArray;
  }

  get softSkills(): FormArray {
    return this.softSkillForm.get('softSkills') as FormArray;
  }

  get languages(): FormArray {
    return this.languageForm.get('languages') as FormArray;
  }

  get interests(): FormArray {
    return this.interestForm.get('interests') as FormArray;
  }

  // Methods to add / remove items for dynamic arrays
  addExperience(): void { this.experiences.push(this.createExperienceGroup()); }
  removeExperience(index: number): void { this.experiences.removeAt(index); }

  addEducation(): void { this.education.push(this.createEducationGroup()); }
  removeEducation(index: number): void { this.education.removeAt(index); }

  addCertification(): void { this.certifications.push(this.createCertificationGroup()); }
  removeCertification(index: number): void { this.certifications.removeAt(index); }

  addSkill(): void { this.skills.push(this.createskillGroup()); }
  removeSkill(index: number): void { this.skills.removeAt(index); }

  addProject(): void { this.projects.push(this.createProjectGroup()); }
  removeProject(index: number): void { this.projects.removeAt(index); }

  addSoftSkill(): void { this.softSkills.push(this.createSoftSkillGroup()); }
  removeSoftSkill(index: number): void { this.softSkills.removeAt(index); }

  addLanguage(): void { this.languages.push(this.createLanguageGroup()); }
  removeLanguage(index: number): void { this.languages.removeAt(index); }

  addInterest(): void { this.interests.push(this.createInterestGroup()); }
  removeInterest(index: number): void { this.interests.removeAt(index); }

  // AI integration methods using Gemini API

  generateProfileSummary(): void {
    const prompt = `Generate a compelling professional profile summary for a resume using these details: ${JSON.stringify(this.userDetailsForm.value)}`;
    this.ai.generateContent(prompt).subscribe(response => {
      if (response?.contents?.[0]?.parts) {
        const generatedSummary = response.contents[0].parts.map((p: any) => p.text).join(' ');
        // Patch the generated summary into the jobDescription control
        this.userDetailsForm.patchValue({ jobDescription: generatedSummary });
      }
    }, error => {
      console.error('Error generating profile summary:', error);
    });
  }

  generateExperienceRoles(index: number): void {
    const expControl = this.experiences.at(index);
    const expValue = expControl.value;
    const prompt = `Generate detailed roles and responsibilities for a work experience at ${expValue.company} as ${expValue.designation} in ${expValue.location}, during the period from ${expValue.periodFrom} to ${expValue.periodTo}.`;
    this.ai.generateContent(prompt).subscribe(response => {
      if (response?.contents?.[0]?.parts) {
        const generatedRoles = response.contents[0].parts.map((p: any) => p.text).join(' ');
        expControl.patchValue({ rolesAndResponsibility: generatedRoles });
      }
    }, error => {
      console.error('Error generating roles and responsibilities:', error);
    });
  }

  generateProjectDescription(index: number): void {
    const projControl = this.projects.at(index);
    const projValue = projControl.value;
    const prompt = `Generate an engaging project description for the project titled "${projValue.projectName}" (link: ${projValue.link}), which ran from ${projValue.periodFrom} to ${projValue.periodTo}.`;
    this.ai.generateContent(prompt).subscribe(response => {
      if (response?.contents?.[0]?.parts) {
        const generatedDescription = response.contents[0].parts.map((p: any) => p.text).join(' ');
        projControl.patchValue({ description: generatedDescription });
      }
    }, error => {
      console.error('Error generating project description:', error);
    });
  }

  // PDF download method
  downloadAsPDF(): void {
    const doc = new jspdf.jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    const content = this.resumePrint.nativeElement;
    html2canvas(content, {
      scale: 2,
      logging: false,
      width: content.offsetWidth,
      height: content.offsetHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg', 0.8);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let yOffset = 0;
      const maxA4Height = 297;
      while (yOffset < imgHeight) {
        doc.addImage(imgData, 'JPEG', 0, -yOffset, imgWidth, imgHeight);
        if (yOffset + maxA4Height < imgHeight) {
          doc.addPage();
        }
        yOffset += maxA4Height;
      }
      doc.output('dataurlnewwindow');
      doc.save(this.userDetailsForm.value.name + ' Resume');
    });
  }

  // (Submit functions for each form may simply log or further process data)
  submitUserDetailsForm(): void { console.log('User Details:', this.userDetailsForm.value); }
  submitExperienceForm(): void { console.log('Experience:', this.experienceForm.value); }
  submitEducationForm(): void { console.log('Education:', this.educationForm.value); }
  submitCertificationForm(): void { console.log('Certifications:', this.certificationForm.value); }
  submitSkillForm(): void { console.log('Skills:', this.skillForm.value); }
  submitProjectForm(): void { console.log('Projects:', this.projectForm.value); }
  submitSoftSkillForm(): void { console.log('Soft Skills:', this.softSkillForm.value); }
  submitLanguageForm(): void { console.log('Languages:', this.languageForm.value); }
  submitInterestForm(): void { console.log('Interests:', this.interestForm.value); }
}
