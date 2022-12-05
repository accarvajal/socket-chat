import { Component, OnInit } from '@angular/core';

import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

}
