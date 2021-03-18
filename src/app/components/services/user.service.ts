import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class UserService {

	public toggle = false;

	// Add New User
	public addUser(name) {
		this.toggle = !this.toggle;
	}
}
