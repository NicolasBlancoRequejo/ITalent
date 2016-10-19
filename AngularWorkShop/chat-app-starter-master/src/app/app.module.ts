import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {MdCard} from '@angular2-material/card';
import {MdToolbar, MdToolbarRow} from '@angular2-material/toolbar';
import {ChatComponent} from './pages/chat-page/chat/chat.component';
import {ChatTextInputComponent} from './pages/chat-page/chat/chat-text-input/chat-text-input.component';
import {ChatService} from "./shared/ChatService";

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    MdToolbar, MdToolbarRow, MdCard, ChatComponent, ChatTextInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
