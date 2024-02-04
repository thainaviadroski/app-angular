import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fone-input',
  standalone: true,
  imports: [],
  templateUrl: './fone-input.component.html',
  styleUrl: './fone-input.component.css'
})
export class FoneInputComponent implements OnInit {

	@Input() fala!:string;

	ngOnInit(): void {
		console.log(this.fala);
	}

}
