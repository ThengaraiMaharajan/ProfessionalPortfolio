import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemarkModule } from 'ngx-remark';


@NgModule({
  declarations: [
    ChatScreenComponent
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RemarkModule
  ]
})
export class ChatbotModule { }
