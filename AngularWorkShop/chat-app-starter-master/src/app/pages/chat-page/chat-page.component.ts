import {Component} from '@angular/core';

@Component({
  selector: 'app-chat-page',
  template: `
      <md-toolbar>
        <md-toolbar-row></md-toolbar-row>
      </md-toolbar>
    
      <div class="chat-container">
        <md-card></md-card>
      </div>
  `,
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {

  constructor() {
  }
}
