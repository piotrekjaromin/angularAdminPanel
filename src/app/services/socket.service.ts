
import {Injectable} from '@angular/core';
import * as sioc from 'socket.io-client';
@Injectable()
export class SocketService {


  init() {
    console.log('SocketService init');
    const socket = sioc.connect('/', {path: '/ws'});
    socket.on('messages', (data) => {
      console.log('socket', data);
    });
  }

}
