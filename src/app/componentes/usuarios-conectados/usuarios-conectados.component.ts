import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-usuarios-conectados',
  templateUrl: './usuarios-conectados.component.html',
  styleUrls: ['./usuarios-conectados.component.css']
})
export class UsuariosConectadosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;
  
  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.usuariosActivosObs = this.chatService.getActiveUsers();
    this.chatService.emitActiveUsers();
  }

}
