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
  isLoading: boolean = false;

  constructor(private ai: AIApiService) {}

  ngOnInit(): void {

    this.messages.push({ sender: 'bot', text: 'Hello! How can I help you today?' });
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;


    const userMsg: ChatMessage = { sender: 'user', text: this.userInput };
    this.messages.push(userMsg);
    const messageToSend = this.userInput;
    this.userInput = '';

    this.isLoading = true;

    this.ai.generateContent(messageToSend).subscribe(
      response => {
        const botReply = response.candidates[0].content.parts[0].text || 'I did not understand that.';
        this.messages.push({ sender: 'bot', text: botReply });
        this.isLoading = false;
      },
      error => {
        console.error('Error sending message:', error);
        this.messages.push({ sender: 'bot', text: 'Error: Could not connect to the service.' });
        this.isLoading = false;
      }
    );
  }

}
