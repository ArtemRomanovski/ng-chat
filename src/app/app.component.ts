import { Component } from "@angular/core";
import { ClientService } from "./components/services/client.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	public title = "ng-chat";

	constructor(public userService: ClientService) {}
}
