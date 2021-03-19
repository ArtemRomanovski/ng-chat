import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class ClientService {

	public toggle = false;
	public currantClientName: string;

	// Add New User
	public addClient(clientName) {
		this.currantClientName = clientName;
		this.toggle = !this.toggle;
	}
}
