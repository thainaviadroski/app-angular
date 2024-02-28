import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-fone-input',
	standalone: true,
	imports: [],
	templateUrl: './fone-input.component.html',
	styleUrl: './fone-input.component.css',
})
export class FoneInputComponent implements OnInit {
	@Input() text!: string;

	ngOnInit(): void {
		let fone = document.getElementById('fone') as HTMLInputElement | null;
		if (fone != null) {
			if (fone.value.length == 0) {
				fone.value += '(';
			}
		}
	}

	sendit() {
		let fone = document.getElementById('fone') as HTMLInputElement | null;
		if (fone != null) {
			if (fone.value.length == 0) {
				fone.value += '(';
			}

			if (fone.value.length == 1) {
				fone.value += ') ';
			}
		}
	}
}
