import { Injectable } from "@angular/core";
import { ClientService } from "./client.service";
import { DateService } from "./date.service";

@Injectable({
	providedIn: "root"
})
export class ChatService {

	public chatDataBaseMessages = [
		{
			sender: "Поставщик",
			title: "Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			time: "15:32"
		},
		{
			sender: "Покупатель",
			title: "Message 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			time: "16:49"
		},
		{
			sender: "Поставщик",
			title: "Message 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			time: "15:32"
		},
		{
			sender: "Поставщик",
			title: "Message 4. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			time: "15:32"
		},
		{
			sender: "Покупатель",
			title: "Message 5. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			time: "16:49"
		},
		{
			sender: "Поставщик",
			title: "Message 6. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			time: "16:49"
		},
	];
	public message: string;
	public senderValue = this.clientService.currantClientName;
	public titleValue: string;
	public timeValue: string;

	constructor(
		private clientService: ClientService,
		private dateService: DateService
	) { }

	public getTimeMessage() {
		this.dateService.getTime();
		this.timeValue = this.dateService.timeNow;
	}

	public changeName() {
		this.chatDataBaseMessages.forEach(i => {
			if(i.sender == "Покупатель") {
				i.sender = this.senderValue;
			}
		});
	}

	public addMessage(titleValue: string) {
		this.getTimeMessage();
		titleValue = titleValue.replace(/ +/g, " ").trim();
		if(titleValue != undefined && titleValue != "") {
			this.fakeM = titleValue;
			const message = {
				sender: this.senderValue,
				title: titleValue,
				time: this.timeValue
			};
			this.chatDataBaseMessages.unshift(message);
			this.message = "";
			this.addFakeMessage(); // add Fake Message
		}
	}

	// add Fake Message
	public fakeM;
	public addFakeMessage() {
		this.getTimeMessage();
		const fakeMessage = {
			sender: "Поставщик",
			title: `"${this.fakeM}" - Are you serios?`,
			time: this.timeValue
		};
		setTimeout(() => {
			this.chatDataBaseMessages.unshift(fakeMessage);
		}, 2000);
	}

	public disableBrowsereEvent() {
		window.onkeydown = function(event: any) {
			if(event.keyCode==13){
				if(event.preventDefault) event.preventDefault(); // This should fix it
				return false; // Just a workaround for old browsers
			}
		};
	}
}
