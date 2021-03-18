import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
	selector: "app-form-reg",
	templateUrl: "./form-reg.component.html",
	styleUrls: ["./form-reg.component.scss"]
})
export class FormRegComponent implements OnInit {

	public regExpName = [/^[a-zA-Zа-яА-ЯёЁ]*$/];
	public maxLength = 20;
	public name = "";

	constructor(private userService: UserService) {}

	public ngOnInit(): void {
	}

	// add New User
	public addUser(name) {
		this.userService.addUser(name);
	}
}
