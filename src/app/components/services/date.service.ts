import { Injectable } from "@angular/core";
import { ChatService } from "./chat.service";
import { ClientService } from "./client.service";

@Injectable({
	providedIn: "root"
})
export class DateService {

	public dateNow: string;
	public timeNow: string;
	
	public getDate() {
		const date = new Date();
		let dd: any = date.getDate();
		let mm: any = date.getMonth()+1;
		let yyyy = date.getFullYear();
		if(dd < 10) {
			dd = "0" + dd;
		}
		if(mm < 10) {
			mm = "0" + mm;
		}
		return this.dateNow = dd + "." + mm + "." + yyyy;
	}

	public getTime() {
		const date = new Date();
		let hour: any = date.getHours();
		let minute: any = date.getMinutes();
		this.timeNow = hour + ":" + minute;
	}

	public getFullDate() {
		this.getDate();
		this.getTime();
	}
}
