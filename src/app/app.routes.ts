import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrintRequestComponent } from './components/print-request/print-request.component';

export const routes: Routes = [
	{ path: 'sendResquest', component: PrintRequestComponent },
];
