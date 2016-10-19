import {Component, Output} from '@angular/core';
import EventEmitter = NodeJS.EventEmitter;

@Component({
  selector: 'text-input',
  styleUrls: ['./chat-text-input.component.scss'],
  templateUrl: './chat-text-input.component.html',
})
export class ChatTextInputComponent {
  @Output() sendMessage = new EventEmitter();
  private messageInput: String;

  constructor(){}

  onKey(event: any) {
    this.sendMessage.emit({msg: this.messageInput});
  }
}


