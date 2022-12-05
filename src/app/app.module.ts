import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: environment.apiURL,
  options: {}
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { UsuariosConectadosComponent } from './componentes/usuarios-conectados/usuarios-conectados.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    FooterComponent,
    UsuariosConectadosComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
