import { Component, OnInit } from "@angular/core";
import { DateService } from "../services/date.service";
import { ClientService } from "../services/client.service";
import { ChatService } from "../services/chat.service";

@Component({
	selector: "app-p-chat",
	templateUrl: "./p-chat.component.html",
	styleUrls: ["./p-chat.component.scss"]
})
export class PChatComponent implements OnInit {

	constructor(
		public clientService: ClientService,
		public dateService: DateService,
		public chatService: ChatService
	) { }

	public ngOnInit(): void {
		this.chatService.disableBrowsereEvent();
		setInterval(() => {
			this.dateService.getFullDate();
		}, 0);
		this.chatService.chatDataBaseMessages.reverse();
	}

	public pushMessage(titleValue) {
		this.chatService.addMessage(titleValue);
	}
}
