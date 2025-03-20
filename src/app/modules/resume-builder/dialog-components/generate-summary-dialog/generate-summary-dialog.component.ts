import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { AIApiService } from '../../../../services/aiapi.service';

@Component({
  selector: 'app-generate-summary-dialog',
  templateUrl: './generate-summary-dialog.component.html',
  styleUrl: './generate-summary-dialog.component.css'
})
export class GenerateSummaryDialogComponent {

  dialogForm: FormGroup;
  loading: boolean = false;
  aiRes : any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GenerateSummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userInput: string },
    private clipboard: Clipboard,
    private geminiApiService: AIApiService,
  ) {
    this.dialogForm = this.fb.group({
      userInput: [data.userInput],
      aiResponse: ['']
    });
  }

  askAISuggestion(): void {
    this.loading = true;
    const prompt = `Generate a compelling professional profile summary for a resume using these details: ${this.dialogForm.get('userInput')?.value}`;
    this.geminiApiService.generateContent(prompt).subscribe(response => {
      console.log(response);
      if (response?.candidates?.[0]?.content?.parts[0].text) {
        console.log('insife if : ', response);
        const generatedResponse = response?.candidates?.[0]?.content?.parts[0].text;
        console.log(generatedResponse);
        this.dialogForm.patchValue({ aiResponse: generatedResponse });
        this.aiRes = generatedResponse;
      }
      this.loading = false;
    }, error => {
      console.error('Error generating AI suggestion:', error);
      this.loading = false;
    });
  }

  copyResponse(): void {
    const aiResponse = this.dialogForm.get('aiResponse')?.value;
    if (aiResponse) {
      this.clipboard.copy(aiResponse);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
