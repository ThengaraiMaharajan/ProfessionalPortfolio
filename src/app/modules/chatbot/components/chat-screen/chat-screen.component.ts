import { Component } from '@angular/core';
import { AIApiService } from '../../../../services/aiapi.service';

interface ChatMessage {
  sender: string;
  text: string;
}

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.css'
})
export class ChatScreenComponent {

  messages: ChatMessage[] = [];
  userInput: string = '';

  markdownContent: string = `
  # Hello from ngx‑remark
  
  This is a **Markdown** message that supports:
  
  - Lists
  - **Bold** text
  - _Italic_ text
  - [Angular](https://angular.io)
  
  Enjoy rendering Markdown directly in Angular!
    `;

  constructor(private ai: AIApiService) {}

  ngOnInit(): void {
    // Optional: display an initial welcome message from the bot
    this.messages.push({ sender: 'bot', text: 'Hello! How can I help you today?' });
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    // Add the user's message to the conversation
    const userMsg: ChatMessage = { sender: 'user', text: this.userInput };
    this.messages.push(userMsg);
    const messageToSend = this.userInput;
    this.userInput = '';

    // Call the Gemini API via the chat service
    this.ai.generateContent(messageToSend).subscribe(
      response => {
        // Assume the API returns a property 'reply'
        const botReply = response.candidates[0].content.parts[0].text || 'I did not understand that.';
        this.messages.push({ sender: 'bot', text: botReply });
      },
      error => {
        console.error('Error sending message:', error);
        this.messages.push({ sender: 'bot', text: 'Error: Could not connect to the service.' });
      }
    );
  }

}
