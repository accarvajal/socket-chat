import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

  emitActiveUsers() {
    this.wsService.emit('consultar-usuarios');
  }

  getActiveUser() {
    return this.wsService.getUsuario();
  }

  getActiveUsers() {
    return this.wsService.listen('usuarios-activos');
  }
  
  getChannelStatus() {
    return this.wsService.socketStatus;
  }

  getPrivateMessages() {
    return this.wsService.listen('mensaje-privado');
  }

  getPublicMessages() {
    return this.wsService.listen('mensaje-publico');
  }

  login(usuario: string) {
    return this.wsService.login(usuario);
  }

  logout() {
    this.wsService.logout();
  }

  sendMessage(mensaje: string) {
    const payload = {
      origin: this.wsService.getUsuario().nombre,
      body: mensaje
    }

    this.wsService.emit('mensaje', payload);
  }
}
