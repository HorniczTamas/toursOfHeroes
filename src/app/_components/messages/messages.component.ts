import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from '../../_services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{
  messageService = inject(MessageService)

  ngOnInit(): void {}
}
