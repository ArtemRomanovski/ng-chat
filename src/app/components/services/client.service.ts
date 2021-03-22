import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
	providedIn: "root"
})
export class ClientService {

	public clientForm: FormGroup = new FormGroup({
		"clientName": new FormControl("", [
			Validators.required,
			Validators.minLength(2),
			Validators.maxLength(20),
			Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ ]*$/)
		])
	});
	public name = "";
	public toggle = false;
	public currantClientName: string;

	// Add New User
	public addClient(clientName: string) {
		if(this.clientForm.valid){
			this.currantClientName = clientName;
			this.toggle = !this.toggle;
		} else {
			console.log(this.clientForm.controls.clientName.errors);



			this.clientForm.markAllAsTouched();
		}
	}
}


