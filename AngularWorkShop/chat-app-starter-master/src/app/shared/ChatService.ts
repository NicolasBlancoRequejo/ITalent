/**
 * Created by Nicolas on 19-10-16.
 */
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class ChatService {
  private message: BehaviorSubject<any> = new BehaviorSubject();
  public messages: Observable<any> = this.message.asObservable();

  constructor() {
    this.messages.next([{message: 'hello'}]);
  }
}
