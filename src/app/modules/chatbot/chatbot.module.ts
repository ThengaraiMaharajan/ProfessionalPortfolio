import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';


@NgModule({
  declarations: [
    ChatScreenComponent
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule
  ]
})
export class ChatbotModule { }
