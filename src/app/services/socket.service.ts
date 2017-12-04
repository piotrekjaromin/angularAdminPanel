
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as io from 'socket.io-client';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SocketService implements OnDestroy {
  private socket;
  private connection;

  constructor(private http: Http, private httpClient: HttpClient) {
    this.connection = this.getMessage().subscribe();
  }

  getMessage() {
    const observable = new Observable(observer => {
      this.socket = io('http://localhost:5000');
      this.socket.on('message', (message) => {
        observer.next(message.data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

  sendMessage(type: string, message: string) {
    this.socket.emit(type, message);
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
