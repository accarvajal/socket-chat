import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, of, switchMap } from 'rxjs';
import { Socket } from 'ngx-socket-io';

import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public usuario: Usuario = null;

  constructor(
    private socket: Socket,
    private router: Router
  ) { 
    this.checkConnectionStatus();
    this.loadUser();
  }

  checkConnectionStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
      this.loadUser();
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;      
    });
  }

  emit(evento: string, payload?: any, callback?: Function) {
    console.log('Emitiendo ', evento);
    this.socket.emit( evento, payload, callback );
  }

  getUsuario() {
    return this.usuario;
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  loadUser() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario')!);
      this.login(this.usuario.nombre);
    }
  }

  login( nombre: string ) {
    return new Promise( (resolve, reject) => {
        this.emit('actualizar-usuario', { nombre }, () => {
          this.usuario = new Usuario( nombre );
          this.saveUser();
          resolve(null);
        })
    });
  }

  logout() {
    this.usuario = null;
    localStorage.removeItem('usuario');

    const payload = {
      nombre: 'pending ...'
    }

    this.emit('actualizar-usuario', payload, () => {});
    this.router.navigateByUrl('');
  }

  saveUser() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }
}
