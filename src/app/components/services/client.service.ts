import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class ClientService {

	public regExpName = [/^[a-zA-Zа-яА-ЯёЁ]*$/];
	public maxLength = 20;
	public name = "";
	public toggle = false;
	public currantClientName: string;

	// Add New User
	public addClient(clientName: string) {
		this.currantClientName = clientName;
		this.toggle = !this.toggle;
	}
}


