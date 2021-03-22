import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class DateService {

	public dateNow: string;
	public timeNow: string;

	public getDate() {
		const date: Date = new Date();
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
		const date: Date = new Date();
		const hour: any = date.getHours();
		let minute: any = date.getMinutes();
		if(minute<10) {
			minute = "0" + minute;
		}
		this.timeNow = hour + ":" + minute;
	}

	public getFullDate() {
		this.getDate();
		this.getTime();
	}
}
