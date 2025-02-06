import { Injectable } from '@angular/core';
import Anthropic from '@anthropic-ai/sdk';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AIApiService {

  private anthropic!: Anthropic;

  constructor() { 

    this.anthropic = new Anthropic({
      apiKey: environment.claudeApiKey,
      dangerouslyAllowBrowser: true
    });

  }

  async sendMessage(message: string) {
    try {
      const response : any = await this.anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        messages: [{ role: 'user', content: message }]
      });

      return response.messages[0].content;
    } catch (error) {
      console.error('Claude API Error:', error);
      throw error;
    }
  }

}
