import { Component } from '@angular/core';

import { Applicant } from '../../models/Applicant';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './main.component.html',
	styleUrl: './main.component.css',
})
export class MainComponent {
	//public a: Applicant = new Applicant();

	public cursos = [
		{
			id: 1,
			nome: 'Ciência da Computação',
		},
		{
			id: 2,
			nome: 'Engenharia Mecânica',
		},
		{
			id: 3,
			nome: 'Medicina',
		},
		{
			id: 4,
			nome: 'Direito',
		},
		{
			id: 5,
			nome: 'Administração de Empresas',
		},
	];
}
