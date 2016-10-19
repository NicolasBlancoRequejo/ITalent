import {Component} from '@angular/core';
import {ChatService} from "../../../shared/ChatService";

@Component({
  selector: 'chat',
  template: `
      <div class="chat-view-container">
<text-input (sendMessage)="sendMessage($event)"></text-input>
</div>
  `,
})
export class ChatComponent {
  constructor(private chatService: ChatService) {
  }

  sendMessage(event: any) {
    this.chatService.sendMessage(event.msg);
  }
}
