import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre = '';

  constructor(
    public chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.chatService.login(this.nombre)
        .then(() => {
          this.router.navigateByUrl('/mensajes');
        });
  }

}
