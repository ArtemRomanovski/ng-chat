import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FormRegComponent } from "./components/form-reg/form-reg.component";
import { UserService } from "./components/services/user.service";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PChatComponent } from './components/p-chat/p-chat.component';

@NgModule({
	declarations: [
		AppComponent,
		FormRegComponent,
		MainPageComponent,
		PChatComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [UserService],
	bootstrap: [AppComponent]
})
export class AppModule { }
