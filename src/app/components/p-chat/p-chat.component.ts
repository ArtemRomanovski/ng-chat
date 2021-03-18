import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-p-chat',
  templateUrl: './p-chat.component.html',
  styleUrls: ['./p-chat.component.scss']
})
export class PChatComponent implements OnInit {

	public date = new Date();
	public dateNow;

	public getDate() {
		let dd:any = this.date.getDate();
		let mm:any = this.date.getMonth()+1;
		let yyyy = this.date.getFullYear();
		if(dd < 10) {
			dd = "0" + dd;
		}
		if(mm < 10) {
			mm = "0" + mm;
		}
		return this.dateNow = dd + "." + mm + "." + yyyy;
	}

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.getDate();
	}

}
