import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class DateService {

	public dateNow: string;
	public timeNow: string;

	public getDate() {
		const date = new Date();
		let day: any = date.getDate();
		let month: any = date.getMonth()+1;
		const year = date.getFullYear();
		if(day < 10) {
			day = "0" + day;
		}
		if(month < 10) {
			month = "0" + month;
		}
		return this.dateNow = day + "." + month + "." + year;

	}

	public getTime() {
		const date = new Date();
		const hour: any = date.getHours();
		const minute: any = date.getMinutes();
		this.timeNow = hour + ":" + minute;
	}

	public getFullDate() {
		this.getDate();
		this.getTime();
	}
}
