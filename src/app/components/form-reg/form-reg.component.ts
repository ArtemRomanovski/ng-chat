import { Component, OnInit } from "@angular/core";
import { ClientService } from "../services/client.service";

@Component({
	selector: "app-form-reg",
	templateUrl: "./form-reg.component.html",
	styleUrls: ["./form-reg.component.scss"]
})
export class FormRegComponent implements OnInit {

	public regExpName = [/^[a-zA-Zа-яА-ЯёЁ]*$/];
	public maxLength = 20;
	public name = "";

	constructor(private clientService: ClientService) {}

	public ngOnInit(): void {
	}

	// add New Client
	public addUser(clientName) {
		this.clientService.addClient(clientName);
	}
}
