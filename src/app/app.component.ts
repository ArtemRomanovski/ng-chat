import { Component } from "@angular/core";
import { UserService } from "./components/services/user.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	public title = "ng-chat";

	constructor(public userService: UserService) {}
}
