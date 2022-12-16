import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }


  updateChat(message: Message, chatId: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl + "/chats/message/" + `${chatId}`, message);
  }

  getChatById(chatId: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chats/" + chatId)
  }

  createChatRoom(chat: Chat): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "/chats/add", chat);
  }

  getChatByFirstUserNameAndSecondUserName(firstUserName: String, secondUserName: String) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chats/getChatByFirstUserNameAndSecondUserName" + '?firstUserName=' + firstUserName + '&secondUserName=' + secondUserName)
  }

  getChatByFirstUserNameOrSecondUserName(username: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chats/getChatByFirstUserNameOrSecondUserName/" + username)
  }

}
