import { Component } from "@angular/core";
import { ClientService } from "../services/client.service";

@Component({
	selector: "app-form-reg",
	templateUrl: "./form-reg.component.html",
	styleUrls: ["./form-reg.component.scss"]
})
export class FormRegComponent {

	constructor(public clientService: ClientService) {}

	public addUser(clientName: string) {
		this.clientService.addClient(clientName);
	}
}
